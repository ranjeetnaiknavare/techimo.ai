import Footer from '@/components/footer'
import Header from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
})

const title = 'Techimo AI portal'
const description =
    'A fully open-source AI-powered answer engine with a generative UI.'

export const metadata: Metadata = {
    metadataBase: new URL('https://morphic.sh'),
    title,
    description,
    openGraph: {
        title,
        description
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image',
        creator: '@miiura'
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const enableSaveChatHistory =
        process.env.NEXT_PUBLIC_ENABLE_SAVE_CHAT_HISTORY === 'true'
    return (
        <html lang="en" suppressHydrationWarning>
            <head> {/* Combined head from the second RootLayout */}
                <title>Next.js</title> {/* You might want a dynamic title here */}
            </head>
            <body className={cn('font-sans antialiased', fontSans.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    {enableSaveChatHistory && <Sidebar />}
                    <Footer />
                    <Toaster />
                    <Analytics /> {/* Analytics moved inside the ThemeProvider */}
                </ThemeProvider>
            </body>
        </html>
    )
}