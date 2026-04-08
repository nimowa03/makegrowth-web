import { appendToSheet } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const timestamp = new Date().toISOString();

    console.log("[Contact Submission]", JSON.stringify(data, null, 2));

    // Google Sheets
    await appendToSheet("문의", [
      timestamp,
      data.name || "",
      data.email || "",
      data.mainConcern || "",
    ]);

    // N8N Webhook (when env is configured)
    if (process.env.N8N_WEBHOOK_URL) {
      await fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
      });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
