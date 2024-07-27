import { Head } from '@/components/seo'
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
         <div className="relative grid h-screen content-between overflow-hidden">
            <Header dictionary={dictionary} />
            {children}
            <div className="h-[98px]">
               <Footer dictionary={dictionary} />
            </div>
         </div>
      </React.Fragment>
   )
}

const Banner: React.FC = () => {
   return (
      <div className="mt-[104px] flex h-14 w-full items-center justify-center bg-black-500">
         <h3 className="font-sf-pro-display text-xl text-white-100">
            Nós comprimimos <strong>1.000</strong> arquivos, economizando um total de <strong>1TB</strong>.
         </h3>
      </div>
   )
}
