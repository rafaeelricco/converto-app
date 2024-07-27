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
            <div className="mt-[104px] flex h-14 w-full items-center justify-center bg-black-500">
               <h3 className="font-sf-pro-display text-xl text-white-100">
                  Nós comprimimos <strong>1.000</strong> arquivos, economizando um total de <strong>1TB</strong>.
               </h3>
            </div>
            {children}
            <Grid className="absolute top-0 -z-10" />
            <Footer dictionary={dictionary} />
         </div>
      </React.Fragment>
   )
}
