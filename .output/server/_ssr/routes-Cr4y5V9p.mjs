import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SectionTitle, d as WHY_US, i as PROJECTS, l as SiteLayout, n as CONTACT, o as SERVICES, r as HERO_SLIDES, s as STATS, t as BLOG, u as TEAM_ROLES } from "./SectionTitle-CtfnHWhk.mjs";
import { t as TeamRoles } from "./TeamRoles-CZlRdYCn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cr4y5V9p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSlider() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % HERO_SLIDES.length), 6e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[92vh] min-h-[640px] max-h-[860px] overflow-hidden bg-[#1e1e2d]",
		children: [
			HERO_SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.title,
						className: "w-full h-full object-cover scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#12121b]/85 via-[#12121b]/60 to-[#12121b]/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-w-[1280px] mx-auto px-6 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-[720px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-10 bg-[#e07a1f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm",
											children: s.subtitle
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-white font-display font-bold uppercase leading-[1.05] text-[46px] md:text-[68px] whitespace-pre-line mb-6",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/80 text-[17px] max-w-[600px] mb-9 leading-relaxed",
										children: s.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: s.cta.to,
											className: "inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]",
											children: [
												s.cta.label,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 border border-white text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-white hover:text-[#1e1e2d]",
											children: "Contact Us"
										})]
									})
								]
							})
						})
					})
				]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Prev",
				onClick: () => setI((v) => (v - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
				className: "absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center bg-black/30 text-white hover:bg-[#e07a1f]",
				children: "‹"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Next",
				onClick: () => setI((v) => (v + 1) % HERO_SLIDES.length),
				className: "absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center bg-black/30 text-white hover:bg-[#e07a1f]",
				children: "›"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2",
				children: HERO_SLIDES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": `Slide ${idx + 1}`,
					onClick: () => setI(idx),
					className: `h-[3px] transition-all ${idx === i ? "w-10 bg-[#e07a1f]" : "w-6 bg-white/40"}`
				}, idx))
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-4 -left-4 w-32 h-32 border-2 border-[#e07a1f] z-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=srgb&fm=jpg&q=85",
							alt: "Construction site",
							className: "relative w-full h-[520px] object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 right-6 bg-[#e07a1f] text-white px-8 py-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display font-bold text-5xl leading-none",
								children: ["28", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-3xl align-top",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "uppercase tracking-widest text-xs mt-1",
								children: "Years of Excellence"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "About Our Company",
						title: "Trusted Government Contractor Building India's Infrastructure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[#1e1e2d]",
								children: "Shri Mahalaxmi Construction"
							}),
							" is a Class-A registered government contractor specializing in large-scale civil engineering, roads, bridges, public buildings and municipal infrastructure. With over ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "28" }),
							" years of experience, we have executed hundreds of projects for PWD, NHAI, Municipal Corporations and MJP with an uncompromising commitment to quality, safety and on-time delivery."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid sm:grid-cols-2 gap-3 mb-8 text-sm",
						children: [
							"Government registered Class-A civil contractor",
							"ISO 9001:2015 quality certified",
							"In-house engineering & project management team",
							"Modern equipment fleet and batching plants",
							"Strong safety and compliance culture",
							"Transparent tender and billing practices"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e07a1f]",
								children: "✓"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]",
							children: "More About Us →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-12 h-12 rounded-full bg-[#e07a1f]/10 text-[#e07a1f] grid place-items-center text-xl",
								children: "☎"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Call Anytime"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
								className: "font-display font-bold text-[#1e1e2d]",
								children: CONTACT.phone
							})] })]
						})]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-[#f6f6f4]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: true,
					eyebrow: "What We Do",
					title: "Our Construction Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group bg-white shadow-sm hover:shadow-xl transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-56 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 left-3 w-11 h-11 bg-[#e07a1f] text-white grid place-items-center",
								children: "■"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold uppercase text-lg text-[#1e1e2d] mb-2",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed mb-4",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "text-[#e07a1f] uppercase font-display tracking-wider text-xs inline-flex items-center gap-2",
									children: "Read More →"
								})
							]
						})]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#1e1e2d] text-white py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-bold text-5xl text-[#e07a1f]",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "uppercase tracking-widest text-xs mt-2 text-white/70",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						center: true,
						eyebrow: "Featured Projects",
						title: "Recently Completed Work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									className: "w-full h-72 object-cover group-hover:scale-105 transition"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#12121b]/90 via-[#12121b]/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 left-0 right-0 p-6 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] uppercase tracking-[0.28em] text-[#e07a1f] mb-2",
											children: p.cat
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display font-bold uppercase text-xl mb-1",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-white/70 text-sm",
											children: [
												p.location,
												" • ",
												p.year
											]
										})
									]
								})
							]
						}, p.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]",
							children: "View All Projects →"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-[#f6f6f4]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						center: true,
						eyebrow: "Why Choose Us",
						title: "Excellence In Every Project We Deliver"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-muted-foreground max-w-3xl mx-auto -mt-6 mb-12",
						children: "Our reputation is built on decades of successful project delivery, rigorous quality control, and complete transparency with government departments and citizens we serve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: WHY_US.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-8 border-t-4 border-[#e07a1f]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 bg-[#e07a1f]/10 text-[#e07a1f] grid place-items-center text-2xl mb-4",
									children: "★"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold uppercase text-[#1e1e2d] mb-2",
									children: w.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: w.desc
								})
							]
						}, w.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12 h-12 rounded-full bg-[#e07a1f] text-white grid place-items-center",
							children: "☎"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "24/7 Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold text-[#1e1e2d]",
							children: "Talk to our experts"
						})] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: true,
					eyebrow: "Our Organization",
					title: "Company Structure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamRoles, { sections: TEAM_ROLES })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-[#1e1e2d] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mx-auto px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						center: true,
						light: true,
						eyebrow: "Testimonials",
						title: "What Our Clients Say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[#e07a1f] text-6xl font-serif leading-none",
						children: "“"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-white/85 mb-6",
						children: "Shri Mahalaxmi Construction executed our highway expansion with exceptional quality and finished ahead of schedule. Their engineering standards are outstanding."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[#e07a1f] text-4xl font-serif",
						children: "”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold uppercase",
							children: "Er. Prakash Sawant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/60 text-sm",
							children: "Executive Engineer, PWD Pune"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: true,
					eyebrow: "News & Updates",
					title: "Latest From Our Blog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: BLOG.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-white shadow-sm hover:shadow-xl transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden h-56",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.image,
								alt: b.title,
								className: "w-full h-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 bg-[#e07a1f] text-white text-xs uppercase tracking-widest px-3 py-1",
								children: b.cat
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", b.date] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["👤 ", b.author] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold uppercase text-lg text-[#1e1e2d] mb-3",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-4",
									children: b.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "text-[#e07a1f] uppercase font-display tracking-wider text-xs",
									children: "Read More →"
								})
							]
						})]
					}, b.title))
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
