import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import logoUrl from "../assets/logo.jpeg";
import appCss from "../style.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shri Mahalaxmi Construction | Government Contractor & Civil Engineering Experts" },
      { name: "description", content: "Class-A registered government contractor delivering roads, bridges, public buildings and municipal infrastructure across Maharashtra. Established 2024 by Prathamesh Jadhav." },
      { name: "keywords", content: "government contractor, civil engineering, road construction, bridge construction, infrastructure, Maharashtra, PWD, municipal projects, earthwork, HPC structures" },
      { name: "author", content: "Shri Mahalaxmi Construction" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "google9c27aaa56cf9aa12.html" },
      { property: "og:title", content: "Shri Mahalaxmi Construction | Government Contractor & Civil Engineering Experts" },
      { property: "og:description", content: "Trusted government civil contractor building Maharashtra's infrastructure. Roads, bridges, public buildings, and municipal projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shrimahalaxmiconstruction.com" },
      { property: "og:site_name", content: "Shri Mahalaxmi Construction" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shri Mahalaxmi Construction | Government Contractor" },
      { name: "twitter:description", content: "Class-A government contractor delivering quality infrastructure across Maharashtra since 2024." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: logoUrl, type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ConstructionBusiness",
          "name": "Shri Mahalaxmi Construction",
          "description": "Class-A registered government contractor delivering roads, bridges, public buildings and municipal infrastructure across Maharashtra. Established 2024 by Prathamesh Jadhav.",
          "url": "https://shrimahalaxmiconstruction.com",
          "telephone": "+91-9876543210",
          "email": "info@shrimahalaxmiconstruction.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Maharashtra",
            "addressCountry": "IN"
          },
          "foundingDate": "2024",
          "founder": {
            "@type": "Person",
            "name": "Prathamesh Jadhav"
          },
          "areaServed": "Maharashtra",
          "priceRange": "$$$",
          "openingHours": "Mo-Su 00:00-23:59",
          "serviceType": ["Road Construction", "Bridge Construction", "Public Buildings", "Municipal Infrastructure", "Civil Engineering", "Earthwork"]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
