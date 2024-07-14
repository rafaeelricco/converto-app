import { Locale } from 'i18n-config'
import { Metadata } from 'next'
import React from 'react'

export const metadata = {
   title: 'Ricco | Descubra a força da colaboração para realizar suas ideias',
   description:
      'Mais do que desenvolvimento, uma rede de talentos à sua disposição para transformar seus sonhos em realidade digital.',
   openGraph: {
      type: 'website',
      url: `https://${process.env.VERCEL_URL}`,
      title: 'Ricco | Descubra a força da colaboração para realizar suas ideias',
      description:
         'Mais do que desenvolvimento, uma rede de talentos à sua disposição para transformar seus sonhos em realidade digital.',
      siteName: 'Ricco | Descubra a força da colaboração para realizar suas ideias'
   }
} as Metadata

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
   return <React.Fragment>test</React.Fragment>
}
