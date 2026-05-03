import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, topic, message } = body;

    if (!firstName || !lastName || !email || !topic || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (message.length < 10 || message.length > 500) {
      return NextResponse.json({ error: "Message must be between 10 and 500 characters" }, { status: 400 });
    }

    console.log("New Contact Form Submission:");
    console.log(`  Name: ${firstName} ${lastName}`);
    console.log(`  Email: ${email}`);
    console.log(`  Topic: ${topic}`);
    console.log(`  Message: ${message}`);

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_test_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Hiliree Contact <no-reply@hiliree.com>",
        to: "support@hiliree.com",
        replyTo: email,
        subject: `[${topic}] Message from ${firstName} ${lastName}`,
        html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Topic:</strong> ${topic}</p><p><strong>Message:</strong></p><p>${message}</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}