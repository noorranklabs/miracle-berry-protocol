import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SchemaScript } from "@/components/SchemaScript";
import { NOORRANK_ORG } from "@/lib/schemas/organization";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aeo-labs.noorrank.com'),
  title: {
    default: 'Miracle Berry AEO Protocol | NoorRank Labs',
    template: '%s | MB-AEO Protocol'
  },
  description: 'A transparent experiment in entity-first optimization for answer engines. Open research project by NoorRank.',
  keywords: ['Answer Engine Optimization', 'Entity SEO', 'Structured Data', 'AEO', 'Knowledge Graph', 'AI Search', 'LLM Optimization'],
  authors: [{ name: 'NoorRank', url: 'https://noorrank.com' }],
  creator: 'NoorRank',
  publisher: 'NoorRank',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aeo-labs.noorrank.com',
    siteName: 'Miracle Berry AEO Protocol',
    title: 'Miracle Berry AEO Protocol | NoorRank Labs',
    description: 'A transparent experiment in entity-first optimization for answer engines',
    images: [
      {
        url: 'https://aeo-labs.noorrank.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Miracle Berry AEO Protocol'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miracle Berry AEO Protocol',
    description: 'A transparent experiment in entity-first optimization',
    images: ['https://aeo-labs.noorrank.com/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        {/* Global Organization Schema - appears on every page */}
        <SchemaScript schema={NOORRANK_ORG} />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <a href="/" className="font-bold text-lg tracking-tight hover:text-primary/90 transition-colors">MB-AEO Protocol</a>

                <div className="flex items-center gap-6">
                  <div className="flex flex-wrap gap-6">
                    <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
                    <a href="/documentation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Docs</a>
                    <a href="/progress" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Progress</a>
                    <a href="/methodology" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Methodology</a>
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main className="container mx-auto px-4 py-12 flex-grow">
            {children}
          </main>

          <footer className="border-t border-border mt-auto bg-surface py-12 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4">
              <p>An open research project by <a href="https://noorrank.com" className="font-medium text-foreground underline decoration-border hover:decoration-foreground transition-all">NoorRank</a></p>
              <p className="mt-4 text-xs">
                © {new Date().getFullYear()} NoorRank. Licensed under MIT.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
