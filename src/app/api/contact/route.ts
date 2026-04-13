import { appendToSheet } from "@/lib/googleSheets";
import { triggerN8nWebhook } from "@/lib/n8nWebhook";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const timestamp = new Date().toISOString();

    // Google Sheets
    await appendToSheet("문의", [
      timestamp,
      data.name || "",
      data.email || "",
      data.mainConcern || "",
    ]);

    await triggerN8nWebhook({ type: "contact", ...data });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
