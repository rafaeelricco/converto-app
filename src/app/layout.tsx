import '@/app/globals.css'

import { i18n } from 'i18n-config'
import { Metadata } from 'next'
import { Toaster } from 'sonner'

export const metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
} as Metadata

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
   return (
      <html lang={params.lang}>
         <body className="antialiased" id="root">
            {children}
            <Toaster />
         </body>
      </html>
   )
}
