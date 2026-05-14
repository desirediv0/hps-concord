import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, company, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f6fb;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 40px auto;
                    background: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    overflow: hidden;
                }
                .header {
                    background-color: #0d2461;
                    padding: 30px;
                    text-align: center;
                    border-bottom: 4px solid #c8102e;
                }
                .header h1 {
                    color: #ffffff;
                    margin: 0;
                    font-size: 24px;
                    letter-spacing: 1px;
                }
                .content {
                    padding: 30px;
                    color: #333333;
                }
                .field {
                    margin-bottom: 20px;
                    border-bottom: 1px solid #eeeeee;
                    padding-bottom: 15px;
                }
                .field:last-child {
                    border-bottom: none;
                }
                .label {
                    font-weight: bold;
                    color: #c8102e;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                }
                .value {
                    font-size: 16px;
                    line-height: 1.5;
                }
                .footer {
                    background-color: #f9f9f9;
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #777777;
                    border-top: 1px solid #eeeeee;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Contact Enquiry</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Name</div>
                        <div class="value">${name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email</div>
                        <div class="value"><a href="mailto:${email}" style="color: #0d2461; text-decoration: none;">${email}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Company</div>
                        <div class="value">${company || 'Not provided'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Subject</div>
                        <div class="value">${subject || 'General Enquiry'}</div>
                    </div>
                    <div class="field">
                        <div class="label">Message</div>
                        <div class="value" style="white-space: pre-wrap;">${message}</div>
                    </div>
                </div>
                <div class="footer">
                    This email was sent from the HPS Concord website contact form.
                </div>
            </div>
        </body>
        </html>
        `;

        await transporter.sendMail({
            from: `"HPS Concord Contact" <${process.env.FROM_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            replyTo: email,
            subject: `New Contact Form Submission: ${subject || 'General Enquiry'}`,
            html: htmlTemplate,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
