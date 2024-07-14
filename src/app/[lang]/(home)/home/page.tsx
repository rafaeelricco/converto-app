import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import { Metadata } from 'next'

import dynamic from 'next/dynamic'
import React from 'react'

const HomeDynamic = dynamic(() => import('@/features/home/hero').then((mod) => mod.HomeComponent), { ssr: true })

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
   const dictionary = await getDictionary(lang)
   return (
      <React.Suspense>
         <HomeDynamic dictionary={dictionary} />
      </React.Suspense>
   )
}
