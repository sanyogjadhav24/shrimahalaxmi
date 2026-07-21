import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";


const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(5, "Phone number is required"),
  subject: z.string().trim().min(3, "Subject is required"),
  message: z.string().trim().min(10, "Message is required"),
});

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const receiverEmail = process.env.RECEIVER_EMAIL?.trim();

  if (!smtpUser || !smtpPass || !receiverEmail) {
    throw new Error("Missing SMTP_USER, SMTP_PASS, or RECEIVER_EMAIL environment variables.");
  }

  return { smtpUser, smtpPass, receiverEmail };
}

async function sendContactEmail(input: z.infer<typeof contactSubmissionSchema>) {
  const { smtpUser, smtpPass, receiverEmail } = getSmtpConfig();
  const { default: nodemailer } = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `[Website Contact] ${input.subject}`;
  const text = [
    "New website enquiry — Shri Mahalaxmi Construction",
    "Website: https://www.shrimahalaxmiconstruction.site/",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Subject: ${input.subject}`,
    "",
    input.message,
  ].join("\n");
  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0; padding:0; background-color:#f3f4f6; color:#1e1e2d; font-family:Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;">
          <tr>
            <td align="center" style="padding:32px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(30,30,45,0.10);">
                <tr>
                  <td style="padding:28px 32px; background:#1e1e2d; border-bottom:5px solid #e07a1f;">
                    <div style="color:#ffffff; font-size:22px; font-weight:700; letter-spacing:0.3px;">Shri Mahalaxmi Construction</div>
                    <div style="margin-top:6px; color:#f5b06a; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;">New website enquiry</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <h1 style="margin:0 0 8px; color:#1e1e2d; font-size:24px; line-height:32px;">You have a new message</h1>
                    <p style="margin:0 0 28px; color:#667085; font-size:15px; line-height:24px;">A visitor has submitted the contact form on your website.</p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e9eaec; border-radius:8px; border-collapse:separate; overflow:hidden;">
                      <tr>
                        <td style="width:120px; padding:13px 16px; background:#fafafa; border-bottom:1px solid #e9eaec; color:#667085; font-size:13px; font-weight:700;">Name</td>
                        <td style="padding:13px 16px; border-bottom:1px solid #e9eaec; color:#1e1e2d; font-size:14px;">${escapeHtml(input.name)}</td>
                      </tr>
                      <tr>
                        <td style="width:120px; padding:13px 16px; background:#fafafa; border-bottom:1px solid #e9eaec; color:#667085; font-size:13px; font-weight:700;">Email</td>
                        <td style="padding:13px 16px; border-bottom:1px solid #e9eaec; font-size:14px;"><a href="mailto:${encodeURIComponent(input.email)}" style="color:#c86a17; text-decoration:none;">${escapeHtml(input.email)}</a></td>
                      </tr>
                      <tr>
                        <td style="width:120px; padding:13px 16px; background:#fafafa; border-bottom:1px solid #e9eaec; color:#667085; font-size:13px; font-weight:700;">Phone</td>
                        <td style="padding:13px 16px; border-bottom:1px solid #e9eaec; color:#1e1e2d; font-size:14px;"><a href="tel:${encodeURIComponent(input.phone)}" style="color:#1e1e2d; text-decoration:none;">${escapeHtml(input.phone)}</a></td>
                      </tr>
                      <tr>
                        <td style="width:120px; padding:13px 16px; background:#fafafa; color:#667085; font-size:13px; font-weight:700;">Subject</td>
                        <td style="padding:13px 16px; color:#1e1e2d; font-size:14px; font-weight:700;">${escapeHtml(input.subject)}</td>
                      </tr>
                    </table>

                    <div style="margin-top:24px; padding:20px; background:#fff8f1; border-left:4px solid #e07a1f; border-radius:4px;">
                      <div style="margin-bottom:8px; color:#9d5311; font-size:12px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase;">Message</div>
                      <div style="color:#3b3b4a; font-size:15px; line-height:24px; white-space:pre-wrap;">${escapeHtml(input.message)}</div>
                    </div>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;">
                      <tr>
                        <td style="border-radius:6px; background:#e07a1f;">
                          <a href="https://www.shrimahalaxmiconstruction.site/" style="display:inline-block; padding:13px 20px; color:#ffffff; font-size:13px; font-weight:700; letter-spacing:0.5px; text-decoration:none;">Visit Website</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px; background:#fafafa; border-top:1px solid #e9eaec; color:#7b7d85; font-size:12px; line-height:18px;">
                    Sent from the contact form at <a href="https://www.shrimahalaxmiconstruction.site/" style="color:#c86a17; text-decoration:none;">www.shrimahalaxmiconstruction.site</a>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: `Shri Mahalaxmi Construction <${smtpUser}>`,
    to: receiverEmail,
    replyTo: input.email,
    subject,
    text,
    html,
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const submission = contactSubmissionSchema.parse(body);
          await sendContactEmail(submission);

          return Response.json({ ok: true });
        } catch (error) {
          if (error instanceof z.ZodError) {
            return Response.json(
              {
                ok: false,
                message: error.issues[0]?.message ?? "Please check the form fields.",
              },
              { status: 400 },
            );
          }

          console.error("Contact form mail send failed", error);
          return Response.json(
            {
              ok: false,
              message: "Unable to send your message right now. Please try again later.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});
