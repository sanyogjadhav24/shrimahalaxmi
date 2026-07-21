import { o as __toESM } from "../_runtime.mjs";
import { n as CONTACT, o as SERVICES } from "./site-BTPBI16-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-SLk0Bz9z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-6D6vuF_P.jpeg";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[#1e1e2d] text-white/80 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 h-11 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block w-5 h-5 rounded-full bg-[#e07a1f]/20 text-[#e07a1f] text-center leading-5",
						children: "◎"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.address })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 ml-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
							className: "hidden sm:flex items-center gap-2 hover:text-[#e07a1f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e07a1f]",
								children: "☎"
							}), CONTACT.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "hidden md:flex items-center gap-2 hover:text-[#e07a1f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e07a1f]",
								children: "✉"
							}), CONTACT.email]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 border-l border-white/10 pl-4 text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Facebook",
									className: "hover:text-[#e07a1f]",
									children: "f"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Twitter",
									className: "hover:text-[#e07a1f]",
									children: "t"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "LinkedIn",
									className: "hover:text-[#e07a1f]",
									children: "in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Instagram",
									className: "hover:text-[#e07a1f]",
									children: "◧"
								})
							]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white border-b border-black/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 h-[92px] flex items-center justify-between gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-4 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 bg-white rounded-lg shadow-md border border-gray-100 flex-shrink-0 overflow-hidden flex items-center justify-center p-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Shri Mahalaxmi Construction logo",
								className: "w-full h-full object-contain rounded"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display font-bold text-[20px] tracking-widest text-[#1e1e2d]",
								children: "SMC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] tracking-[0.25em] text-[#e07a1f] font-display uppercase",
								children: "Shri Mahalaxmi"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-8 font-display uppercase text-[14px] tracking-wider text-[#1e1e2d]",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "relative py-2 hover:text-[#e07a1f]",
							activeProps: { className: "text-[#e07a1f] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:bg-[#e07a1f]" },
							activeOptions: { exact: n.to === "/" },
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
								children: "Call Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
								className: "font-display font-bold text-[#1e1e2d] text-[17px]",
								children: CONTACT.phone
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-5 py-3 rounded hover:bg-[#c86a17] transition-colors",
							children: ["Get A Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "lg:hidden p-2",
						"aria-label": "Menu",
						children: "☰"
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden border-t border-black/5 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 py-4 flex flex-col gap-3 font-display uppercase tracking-wider text-sm",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "py-2 border-b border-black/5",
						children: n.label
					}, n.to))
				})
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#12121b] text-white/70 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#e07a1f]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white/80 text-sm uppercase tracking-[0.25em] font-display",
						children: "Have a project in mind?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-bold text-white text-2xl md:text-3xl uppercase mt-1",
						children: "Let's Build Something Great Together"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
							className: "bg-white text-[#1e1e2d] px-5 py-3 rounded font-display uppercase tracking-wider text-sm",
							children: ["Call Us · ", CONTACT.phone]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "border border-white/70 text-white px-5 py-3 rounded font-display uppercase tracking-wider text-sm hover:bg-white hover:text-[#1e1e2d]",
							children: "Request a Quote"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Shri Mahalaxmi Construction logo",
							className: "h-11 w-11 rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display font-bold text-[17px]",
								children: "SHRI MAHALAXMI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] tracking-[0.28em] text-[#e07a1f] font-display",
								children: "CONSTRUCTION"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-white",
								children: "Government Contractor & Civil Engineering Experts"
							}),
							". Building reliable public infrastructure across Maharashtra since ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e07a1f]",
								children: "1998"
							}),
							"."
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display uppercase tracking-wider text-base mb-5",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[#e07a1f]",
								children: "→ Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-[#e07a1f]",
								children: "→ About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-[#e07a1f]",
								children: "→ Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: "hover:text-[#e07a1f]",
								children: "→ Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-[#e07a1f]",
								children: "→ Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display uppercase tracking-wider text-base mb-5",
						children: "Our Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: SERVICES.slice(0, 5).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "hover:text-[#e07a1f]",
							children: ["→ ", s.title]
						}) }, s.title))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display uppercase tracking-wider text-base mb-5",
						children: "Get in Touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e07a1f]",
									children: "◎"
								}), CONTACT.address]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e07a1f]",
									children: "☎"
								}), CONTACT.phone]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e07a1f]",
									children: "✉"
								}), CONTACT.email]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e07a1f]",
									children: "⏱"
								}), CONTACT.hours]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1280px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "2026"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "Shri Mahalaxmi Construction"
						}),
						". All Rights Reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Class-A Government Contractor | ISO 9001:2015 Certified" })]
				})
			})
		]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-white font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
