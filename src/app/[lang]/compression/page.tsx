import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

import dynamic from 'next/dynamic'
import React from 'react'

const CompressionAreaDynamic = dynamic(
   () => import('@/features/compression/compression').then((mod) => mod.CompressionArea),
   {
      ssr: true
   }
)

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
   const dictionary = await getDictionary(lang)
   return (
      <React.Suspense>
         <CompressionAreaDynamic dictionary={dictionary} />
      </React.Suspense>
   )
}
