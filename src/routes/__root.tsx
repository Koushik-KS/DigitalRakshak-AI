import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-cyan">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

type AuthCtx = { isAuthenticated: boolean; role: "user" | "admin" | null };
export const Route = createRootRouteWithContext<{ queryClient: QueryClient; auth: AuthCtx }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DigitalRakshak — AI Cybersecurity for Digital Payments" },
      { name: "description", content: "DigitalRakshak protects every UPI payment, URL and message with realtime AI fraud detection." },
      { name: "author", content: "DigitalRakshak" },
      { property: "og:title", content: "DigitalRakshak — AI Cybersecurity for Digital Payments" },
      { property: "og:description", content: "DigitalRakshak protects every UPI payment, URL and message with realtime AI fraud detection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DigitalRakshak — AI Cybersecurity for Digital Payments" },
      { name: "twitter:description", content: "DigitalRakshak protects every UPI payment, URL and message with realtime AI fraud detection." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3b86b16d-efbc-47e0-bc42-e2cb6d4af3fb/id-preview-4cb43f4b--c8d20d23-8cc4-46a6-a919-34653eed2c37.lovable.app-1780046830780.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3b86b16d-efbc-47e0-bc42-e2cb6d4af3fb/id-preview-4cb43f4b--c8d20d23-8cc4-46a6-a919-34653eed2c37.lovable.app-1780046830780.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Outlet />
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
