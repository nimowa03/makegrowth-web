export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log for development
    console.log("[Diagnosis Submission]", JSON.stringify(data, null, 2));

    // Google Sheets (when env is configured)
    if (process.env.GOOGLE_SHEETS_ID && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      // TODO: googleapis integration when ready
    }

    // N8N Webhook (when env is configured)
    if (process.env.N8N_WEBHOOK_URL) {
      await fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
