import { google } from "googleapis";

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!key) return null;

  try {
    const credentials = JSON.parse(key);
    return new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  } catch {
    console.error("[Google Sheets] Failed to parse service account key");
    return null;
  }
}

export async function appendToSheet(
  sheetName: string,
  values: (string | number)[]
): Promise<boolean> {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const auth = getAuth();

  if (!sheetId || !auth) {
    console.log("[Google Sheets] Not configured, skipping");
    return false;
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [values] },
    });
    return true;
  } catch (err) {
    console.error("[Google Sheets] Append failed:", err);
    return false;
  }
}
