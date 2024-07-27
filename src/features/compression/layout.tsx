import { Head } from '@/components/seo'
import { Grid } from '@/components/svgs'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

import React from 'react'

export default async function CompressionAreaLayout({
   children,
   params
}: {
   children: React.ReactNode
   params: { lang: Locale }
}) {
   const dictionary = await getDictionary(params.lang)
   return (
      <React.Fragment>
         <Head
            title="Área de compressão | Transformar seus arquivos é simples e rápido."
            description="A solução gratuita para todas as suas necessidades de conversão de arquivos."
         />
         <div className="relative min-h-screen overflow-hidden">
            <Header dictionary={dictionary} />
            {children}
            <Grid className="absolute top-0 -z-10" />
            <Footer dictionary={dictionary} />
         </div>
      </React.Fragment>
   )
}
