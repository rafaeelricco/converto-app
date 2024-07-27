import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

import dynamic from 'next/dynamic'
import React from 'react'

const HomeDynamic = dynamic(() => import('@/features/home/hero').then((mod) => mod.HomeComponent), { ssr: true })

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
   const dictionary = await getDictionary(lang)
   return (
      <React.Suspense>
         <HomeDynamic dictionary={dictionary} />
      </React.Suspense>
   )
}
