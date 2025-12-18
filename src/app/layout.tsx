import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SchemaScript } from "@/components/SchemaScript";
import { NOORRANK_ORG } from "@/lib/schemas/organization";

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
    <html lang="en">
      <head>
        {/* Global Organization Schema - appears on every page */}
        <SchemaScript schema={NOORRANK_ORG} />
      </head>
      <body className={inter.className}>
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="font-bold text-lg text-gray-900">MB-AEO Protocol</a>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="/" className="text-sm font-medium hover:text-blue-600 transition">Home</a>
                <a href="/documentation" className="text-sm font-medium hover:text-blue-600 transition">Docs</a>
                <a href="/progress" className="text-sm font-medium hover:text-blue-600 transition">Progress</a>
                <a href="/methodology" className="text-sm font-medium hover:text-blue-600 transition">Methodology</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>

        <footer className="border-t mt-16 py-8 text-center text-sm text-gray-600">
          <p>An open research project by <a href="https://noorrank.com" className="underline hover:text-gray-900">NoorRank</a></p>
          <p className="mt-2 text-xs text-gray-500">
            © {new Date().getFullYear()} NoorRank. MIT License.
          </p>
        </footer>
      </body>
    </html>
  );
}
