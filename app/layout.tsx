import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bárbara Lírio — Psicóloga Clínica | Tatuapé e Online',
  description:
    'Psicoterapia para adolescentes, adultos e casais com Bárbara Lírio (CRP 06/230669). Atendimento presencial no Tatuapé e online, baseado em ACT e FAP.',
  generator: 'v0.app',
  keywords: [
    'psicóloga Tatuapé',
    'psicoterapia',
    'terapia online',
    'ACT',
    'FAP',
    'psicóloga Zona Leste',
    'terapia de casal',
  ],
  openGraph: {
    title: 'Bárbara Lírio — Psicóloga Clínica',
    description:
      'Psicoterapia acolhedora e baseada em evidências para adolescentes, adultos e casais. Presencial no Tatuapé e online.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#fffbf8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
