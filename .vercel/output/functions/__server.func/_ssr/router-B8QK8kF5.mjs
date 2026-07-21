import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as stringType, r as ZodError, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B8QK8kF5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var style_default = "/assets/style-CK-R74Mx.css";
function reportLovableError(error, options) {
	if (options?.boundary) {
		console.error(`[${options.boundary}]`, error);
		return;
	}
	console.error(error);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shri Mahalaxmi Construction — Trusted Government Civil Contractor" },
			{
				name: "description",
				content: "Class-A registered government contractor delivering roads, bridges, public buildings and municipal infrastructure across Maharashtra since 1998."
			},
			{
				name: "author",
				content: "Shri Mahalaxmi Construction"
			},
			{
				property: "og:title",
				content: "Shri Mahalaxmi Construction"
			},
			{
				property: "og:description",
				content: "Trusted government civil contractor building India's infrastructure since 1998."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: style_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-DdjyRdeJ.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-Dx9L6kr3.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Class-A government contractor with 28+ years building India's infrastructure."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-CseeP4Go.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Get in touch for tender queries, project inquiries and consultations."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-D112FJQn.mjs");
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Projects — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Featured recently completed government infrastructure projects."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-pYpVOUvp.mjs");
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Roads, bridges, public buildings, water works and industrial civil construction services."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/services",
		"/projects",
		"/contact"
	].map((p) => `  <url><loc>${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var contactSubmissionSchema = objectType({
	name: stringType().trim().min(2, "Name is required"),
	email: stringType().trim().email("Enter a valid email address"),
	phone: stringType().trim().min(5, "Phone number is required"),
	subject: stringType().trim().min(3, "Subject is required"),
	message: stringType().trim().min(10, "Message is required")
});
function escapeHtml(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function getSmtpConfig() {
	const smtpUser = process.env.SMTP_USER?.trim();
	const smtpPass = process.env.SMTP_PASS?.trim();
	const receiverEmail = process.env.RECEIVER_EMAIL?.trim();
	if (!smtpUser || !smtpPass || !receiverEmail) throw new Error("Missing SMTP_USER, SMTP_PASS, or RECEIVER_EMAIL environment variables.");
	return {
		smtpUser,
		smtpPass,
		receiverEmail
	};
}
async function sendContactEmail(input) {
	const { smtpUser, smtpPass, receiverEmail } = getSmtpConfig();
	const { default: nodemailer } = await import("../_libs/nodemailer.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: smtpUser,
			pass: smtpPass
		}
	});
	const subject = `[Website Contact] ${input.subject}`;
	const text = [
		`Name: ${input.name}`,
		`Email: ${input.email}`,
		`Phone: ${input.phone}`,
		`Subject: ${input.subject}`,
		"",
		input.message
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
		html
	});
}
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		await sendContactEmail(contactSubmissionSchema.parse(body));
		return Response.json({ ok: true });
	} catch (error) {
		if (error instanceof ZodError) return Response.json({
			ok: false,
			message: error.issues[0]?.message ?? "Please check the form fields."
		}, { status: 400 });
		console.error("Contact form mail send failed", error);
		return Response.json({
			ok: false,
			message: "Unable to send your message right now. Please try again later."
		}, { status: 500 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	ProjectsRoute: Route$3.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$7
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$7
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$7
	}),
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
