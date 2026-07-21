import { o as __toESM } from "../_runtime.mjs";
import { n as CONTACT } from "./site-BTPBI16-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./Layout-SLk0Bz9z.mjs";
import { t as PageBanner } from "./PageBanner-DQGGheOF.mjs";
import { t as SectionTitle } from "./SectionTitle-BZ9pgjOw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BQ5XH89j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [status, setStatus] = (0, import_react.useState)({
		type: "idle",
		message: ""
	});
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;
	const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=16&output=embed`;
	const items = [
		{
			icon: "◎",
			label: "Office Address",
			val: CONTACT.address
		},
		{
			icon: "☎",
			label: "Phone Number",
			val: CONTACT.phone
		},
		{
			icon: "✉",
			label: "Email Address",
			val: CONTACT.email
		},
		{
			icon: "⏱",
			label: "Working Hours",
			val: CONTACT.hours
		}
	];
	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(event.currentTarget);
		const payload = {
			name: String(formData.get("name") ?? "").trim(),
			email: String(formData.get("email") ?? "").trim(),
			phone: String(formData.get("phone") ?? "").trim(),
			subject: String(formData.get("subject") ?? "").trim(),
			message: String(formData.get("message") ?? "").trim()
		};
		setIsSending(true);
		setStatus({
			type: "idle",
			message: ""
		});
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			});
			const result = await response.json();
			if (!response.ok) throw new Error(result.message ?? "Unable to send message.");
			setStatus({
				type: "success",
				message: "Message sent. We will get back to you soon."
			});
			form.reset();
		} catch (error) {
			const message = error instanceof Error ? error.message : "Unable to send message.";
			setStatus({
				type: "error",
				message
			});
		} finally {
			setIsSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "Get in touch",
			title: "Contact Us",
			crumb: "Contact"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#f6f6f4] p-8 text-center border-t-4 border-[#e07a1f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 rounded-full bg-[#e07a1f] text-white grid place-items-center text-2xl mx-auto mb-4",
							children: i.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold uppercase text-[#1e1e2d]",
							children: i.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground mt-2",
							children: i.val
						})
					]
				}, i.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Contact Form",
						title: "Send Us a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-6",
						children: "Have a tender query, a project inquiry, or need a consultation? Fill out the form and our engineering team will respond within one business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid sm:grid-cols-2 gap-4",
						onSubmit: handleSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								className: "border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]",
								placeholder: "Your Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								required: true,
								className: "border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]",
								placeholder: "Your Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								required: true,
								className: "border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]",
								placeholder: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "subject",
								required: true,
								className: "border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]",
								placeholder: "Subject"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 6,
								required: true,
								className: "sm:col-span-2 border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#e07a1f]",
								placeholder: "Your Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: isSending,
								className: "sm:col-span-2 justify-self-start inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17] disabled:cursor-not-allowed disabled:opacity-70",
								children: isSending ? "Sending..." : "Send Message →"
							}),
							status.type !== "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `sm:col-span-2 text-sm ${status.type === "success" ? "text-green-700" : "text-red-600"}`,
								children: status.message
							}) : null
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Location",
					title: "Find Us on Map"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full h-[480px] overflow-hidden border border-black/10 bg-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Google Maps location",
							src: googleMapsEmbedUrl,
							className: "h-full w-full",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: googleMapsUrl,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": `Open ${CONTACT.address} in Google Maps`,
							className: "absolute inset-0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e1e2d] shadow-sm",
							children: "Click to open in Google Maps"
						})
					]
				})] })]
			})
		})
	] });
}
//#endregion
export { Contact as component };
