import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Jadden Picardal',
  description:
    'Jadden Picardal\'s personal website',
}


const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${polysans.variable} bg-white text-black tracking-tight antialiased dark:bg-zinc-950 dark:text-white`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          themes={['light', 'dark', 'sage', 'rose', 'lavender']}
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]" style={{ 
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            transition: 'background-color 0.2s, color 0.2s'
          }}>
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
