import { appendToSheet } from "@/lib/googleSheets";
import { triggerN8nWebhook } from "@/lib/n8nWebhook";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const timestamp = new Date().toISOString();

    // Google Sheets
    await appendToSheet("진단", [
      timestamp,
      data.email || "",
      data.category || "",
      data.revenue || "",
      data.sellerStatus || "",
      data.aiInterest || "",
      data.painPoint || "",
      data.freeComment || "",
      JSON.stringify(data.hours || {}),
      data.results?.totalHours || 0,
      data.results?.totalMonthlyCost || 0,
      data.results?.totalMonthlySavings || 0,
      data.results?.savingsRate || 0,
    ]);

    await triggerN8nWebhook({ type: "diagnosis", ...data });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
