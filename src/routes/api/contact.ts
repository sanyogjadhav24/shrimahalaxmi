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
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Subject: ${input.subject}`,
    "",
    input.message,
  ].join("\n");
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin: 0 0 16px; color: #111827;">New contact enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
      <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 4px solid #e07a1f;">
        <strong>Message</strong>
        <p style="white-space: pre-wrap; margin: 8px 0 0;">${escapeHtml(input.message)}</p>
      </div>
    </div>
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