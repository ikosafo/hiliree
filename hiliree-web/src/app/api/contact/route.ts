import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, topic, message } = body;
    if (!firstName || !lastName || !email || !topic || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    console.log(`Contact Form: ${firstName} ${lastName} - ${topic}`);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
