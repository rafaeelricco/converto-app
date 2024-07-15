'use client'

import { Grid, Logo } from '@/components/svgs'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const HomeComponent: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   return (
      <React.Fragment>
         <div className="relative">
            <Header dictionary={dictionary} />
            <div className="container relative flex min-h-screen flex-col items-center justify-center">
               <div className="z-20 space-y-6">
                  <Logo className="h-12 w-full fill-black-200 antialiased md:h-14 lg:h-16" />
                  <div className="relative flex flex-col space-y-8 lg:space-y-10 2xl:space-y-20">
                     <div className="flex w-full flex-col items-center gap-2">
                        <div className="flex flex-col items-center gap-6">
                           <h1
                              role="heading"
                              className="text-shadow-lg
                           webkit-text-stroke:text-base-100 webkit-text-stroke-1 bg-opacity-50 bg-gradient-to-b from-black-200 to-black-400 bg-clip-text text-center font-atyp-display text-3xl font-medium tracking-tight text-transparent antialiased md:text-5xl lg:text-6xl"
                           >
                              Transformar seus arquivos
                              <br /> é simples e rápido.
                           </h1>
                        </div>
                        <div className="grid justify-items-center gap-4">
                           <p className="text-center font-sf-pro-display text-sm font-normal text-white-900 md:max-w-[70ch] md:text-base lg:text-lg">
                              A solução gratuita para todas as suas necessidades de conversão de arquivos.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="mx-auto my-0 flex flex-col gap-4 md:max-w-[500px] md:flex-row">
                     <Button variant="default" className="mx-auto my-0 w-full">
                        Comece a converter
                     </Button>
                     <Button variant="outline" className="mx-auto my-0 w-full">
                        Saiba mais
                     </Button>
                  </div>
                  <div className="grid justify-items-center gap-4">
                     <p className="text-center font-sf-pro-display text-base font-normal text-white-900 md:max-w-[70ch]">
                        Você pode contribuir e nos ajudar
                        <br /> a crescer no{' '}
                        <span className="cursor-pointer underline hover:text-black-500">GitHub.</span>
                     </p>
                  </div>
               </div>
            </div>
            <Grid className="absolute top-0 z-10" />
         </div>
      </React.Fragment>
   )
}

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { HomeComponent }
