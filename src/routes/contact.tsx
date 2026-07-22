import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Shri Mahalaxmi Construction | Get Quote" },
      { name: "description", content: "Contact Shri Mahalaxmi Construction for tender queries, project inquiries, and consultations. Class-A government contractor serving Maharashtra. Call us or visit our office." },
      { name: "keywords", content: "contact government contractor, construction company contact, tender queries, project inquiry, Maharashtra construction contact" },
      { property: "og:title", content: "Contact Us — Shri Mahalaxmi Construction" },
      { property: "og:description", content: "Get in touch for tender queries, project inquiries and consultations. Our engineering team responds within one business day." },
    ]
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=16&output=embed`;

  const items = [
    { icon: "◎", label: "Office Address", val: CONTACT.address },
    { icon: "☎", label: "Phone Number", val: CONTACT.phone },
    { icon: "✉", label: "Email Address", val: CONTACT.email },
    { icon: "⏱", label: "Working Hours", val: CONTACT.hours },
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send message.");
      }

      setStatus({ type: "success", message: "Message sent. We will get back to you soon." });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send message.";
      setStatus({ type: "error", message });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <SiteLayout>
      <PageBanner eyebrow="Get in touch" title="Contact Us" crumb="Contact" />
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(i => (
            <div key={i.label} className="bg-[#f6f6f4] p-8 text-center border-t-4 border-[#e07a1f]">
              <div className="w-14 h-14 rounded-full bg-[#e07a1f] text-white grid place-items-center text-2xl mx-auto mb-4">{i.icon}</div>
              <div className="font-display font-bold uppercase text-[#1e1e2d]">{i.label}</div>
              <div className="text-sm text-muted-foreground mt-2">{i.val}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle eyebrow="Contact Form" title="Send Us a Message" />
            <p className="text-muted-foreground mb-6">Have a tender query, a project inquiry, or need a consultation? Fill out the form and our engineering team will respond within one business day.</p>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input name="name" required className="border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]" placeholder="Your Name" />
              <input name="email" type="email" required className="border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]" placeholder="Your Email" />
              <input name="phone" required className="border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]" placeholder="Phone" />
              <input name="subject" required className="border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]" placeholder="Subject" />
              <textarea name="message" rows={6} required className="sm:col-span-2 border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]" placeholder="Your Message" />
              <button disabled={isSending} className="sm:col-span-2 justify-self-start inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17] disabled:cursor-not-allowed disabled:opacity-70">
                {isSending ? "Sending..." : "Send Message →"}
              </button>
              {status.type !== "idle" ? (
                <p className={`sm:col-span-2 text-sm ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
          <div>
            <SectionTitle eyebrow="Location" title="Find Us on Map" />
            <div className="relative w-full h-[480px] overflow-hidden border border-black/10 bg-white">
              <iframe title="Google Maps location" src={googleMapsEmbedUrl} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" aria-label={`Open ${CONTACT.address} in Google Maps`} className="absolute inset-0" />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e1e2d] shadow-sm">
                Click to open in Google Maps
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}