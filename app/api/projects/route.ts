// app/api/sheet/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";

const SHEET_ID = "1yVmQFpRsiTy5Men1nKujm3NWnOUfdVFtyzWn7WCCZeI"; // Your Sheet ID

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Projects", // Change to match your sheet name
    });

    const [headers, ...rows] = response.data.values || [];
    const data = rows.map((row) =>
      Object.fromEntries(headers.map((key, i) => [key, row[i] || ""]))
    );

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch sheet data" },
      { status: 500 }
    );
  }
}
