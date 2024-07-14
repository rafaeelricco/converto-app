import { Locale } from 'i18n-config'
import { Metadata } from 'next'

import React from 'react'

export const metadata = {
   title: 'Converto | Transformar seus arquivos é simples e rápido.',
   description: 'A solução gratuita para todas as suas necessidades de conversão de arquivos.',
   openGraph: {
      type: 'website',
      url: `https://${process.env.VERCEL_URL}`,
      title: 'Converto | Transformar seus arquivos é simples e rápido.',
      description: 'A solução gratuita para todas as suas necessidades de conversão de arquivos.',
      siteName: 'Converto | Transformar seus arquivos é simples e rápido.'
   }
} as Metadata

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
   return <React.Fragment>test</React.Fragment>
}
