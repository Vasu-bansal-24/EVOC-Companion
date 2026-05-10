import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingCTA } from "@/components/floating-cta";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Companion — Lead Generation & Growth Systems for Online Coaches",
  description:
    "We build high-converting funnels, ad systems, and CRM automations that help online coaches consistently book qualified calls and scale revenue.",
  keywords: [
    "lead generation for coaches",
    "CRM automation agency",
    "funnel setup services",
    "ads management agency",
    "online coaching growth",
    "client acquisition system",
    "coaching business automation",
  ],
  authors: [{ name: "Companion Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://companionagency.com",
    siteName: "Companion",
    title: "Companion — Lead Generation & Growth Systems for Online Coaches",
    description:
      "We build high-converting funnels, ad systems, and CRM automations that help online coaches consistently book qualified calls.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Companion Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Companion — Lead Generation & Growth Systems for Online Coaches",
    description:
      "High-converting funnels, ad systems, and CRM automations for online coaches.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCTA />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "var(--color-card)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
