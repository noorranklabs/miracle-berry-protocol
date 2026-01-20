import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { SchemaScript } from "@/components/SchemaScript";
import { NOORRANK_ORG } from "@/lib/schemas/organization";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const libre = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-libre'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.noorranklabs.com'),
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
    url: 'https://www.noorranklabs.com',
    siteName: 'Miracle Berry AEO Protocol',
    title: 'Miracle Berry AEO Protocol | NoorRank Labs',
    description: 'A transparent experiment in entity-first optimization for answer engines',
    images: [
      {
        url: 'https://www.noorranklabs.com/og-image.png',
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
    images: ['https://www.noorranklabs.com/og-image.png']
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
      <body className={`${inter.variable} ${libre.variable} font-sans min-h-screen bg-background text-foreground flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="glass border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <a href="/" className="font-serif font-bold text-xl tracking-tight text-primary hover:text-primary/80 transition-all flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-md text-sm font-sans">MB</span>
                  MB-AEO Protocol
                </a>

                <div className="flex items-center gap-8">
                  <div className="hidden md:flex items-center gap-8">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Docs', href: '/documentation' },
                      { name: 'Progress', href: '/progress' },
                      { name: 'Methodology', href: '/methodology' }
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <div className="h-4 w-px bg-border hidden md:block" />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main className="container mx-auto px-6 py-16 flex-grow">
            {children}
          </main>

          <footer className="border-t border-border mt-auto bg-muted/30 py-16 text-sm text-muted-foreground">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <div className="space-y-4">
                  <div className="font-serif font-bold text-lg text-foreground">NoorRank Labs</div>
                  <p className="max-w-xs">
                    Advancing the science of Answer Engine Optimization through transparent, entity-first experimentation.
                  </p>
                </div>
                <div className="md:text-right space-y-4">
                  <p>An open research project by <a href="https://noorrank.com" className="font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">NoorRank</a></p>
                  <p className="text-xs opacity-70">
                    © {new Date().getFullYear()} NoorRank. Licensed under MIT.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
