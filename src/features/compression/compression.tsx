'use client'

import * as Icon from '@/components/svgs/compression-level'
import { Button } from '@/components/ui/button'

import { Dropzone } from '@/components/ui/dropzone'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

enum TabOptions {
   COMPRESSION_LEVEL = 'compression_level',
   ADVANCED_SETTINGS = 'advanced_settings'
}

const CompressionArea: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   return (
      <React.Fragment>
         <div className="container grid grid-cols-[0.75fr_1fr] gap-6">
            <div className="space-y-4 rounded-lg border border-white-250 p-4">
               <Dropzone />
               <div className="flex flex-1 flex-col gap-4">
                  <div className="space-y-1">
                     <p className="text-base font-semibold">Configurações de compressão</p>
                     <p className="text-sm text-white-900">
                        Aqui você pode ajustar as configurações de compressão dos seus arquivos PDF, iniciar o processo
                        de compressão e acompanhar o progresso em tempo real.
                     </p>
                  </div>
                  <Tabs defaultValue={TabOptions.COMPRESSION_LEVEL}>
                     <TabsList className="grid w-full grid-cols-2 gap-2">
                        <TabsTrigger value={TabOptions.COMPRESSION_LEVEL}>
                           <span className="text-base font-medium text-white-100">Nível de compressão</span>
                        </TabsTrigger>
                        <TabsTrigger value={TabOptions.ADVANCED_SETTINGS}>
                           <span className="text-base font-medium text-white-100">Configurações avançadas</span>
                        </TabsTrigger>
                     </TabsList>
                     <TabsContent value={TabOptions.COMPRESSION_LEVEL}>
                        <div className="space-y-4">
                           <CompressionOption level="low" selected={false} onSelect={(level) => console.log(level)} />
                           <CompressionOption
                              level="medium"
                              selected={false}
                              onSelect={(level) => console.log(level)}
                           />
                           <CompressionOption level="high" selected={false} onSelect={(level) => console.log(level)} />
                           <Button className="w-full" onClick={() => console.log('Comprimir')}>
                              Iniciar compressão
                           </Button>
                        </div>
                     </TabsContent>
                     <TabsContent value={TabOptions.ADVANCED_SETTINGS}>pass</TabsContent>
                  </Tabs>
               </div>
            </div>
            <div className="min-h-[632px] rounded-lg border border-white-250 p-4">container 2</div>
         </div>
      </React.Fragment>
   )
}

type CompressionOptionProps = {
   selected: boolean
   level: 'low' | 'medium' | 'high'
   onSelect: (level: 'low' | 'medium' | 'high') => void
}

const CompressionOption: React.FC<CompressionOptionProps> = ({ level, selected, onSelect }: CompressionOptionProps) => {
   let mapping_icons = {
      low: <Icon.LowLevel className="h-auto w-6" />,
      medium: <Icon.MediumLevel className="h-auto w-6" />,
      high: <Icon.HighLevel className="h-auto w-6" />
   }

   let mapping_texts = {
      low: 'Baixo',
      medium: 'Médio (Recomendado)',
      high: 'Alto'
   }

   let mapping_descriptions = {
      low: 'Ideal para visualização na tela. Esta configuração reduz significativamente o tamanho do arquivo, mantendo uma qualidade suficiente para leitura em dispositivos eletrônicos.',
      medium:
         'Perfeito para eBooks e documentos que precisam ser compartilhados eletronicamente com boa qualidade. Esta configuração equilibra a redução de tamanho do arquivo e a qualidade.',
      high: 'Ótima para documentos que precisam ser impressos com alta qualidade. Esta configuração mantém a qualidade das imagens, garantindo que detalhes importantes não sejam perdidos.'
   }

   return (
      <React.Fragment>
         <div
            onClick={() => onSelect(level)}
            className={cn(
               'grid cursor-default grid-cols-[24px_auto] items-center gap-4 rounded-lg border border-white-250 px-4 py-2',
               {
                  'bg-black-500': selected
               }
            )}
         >
            {mapping_icons[level]}
            <div>
               <p
                  className={cn('font-sf-pro-display text-base font-semibold', {
                     'text-white-100': selected
                  })}
               >
                  {mapping_texts[level]}
               </p>
               <p
                  className={cn('font-sf-pro-display text-xs text-white-900', {
                     'text-white-400': selected
                  })}
               >
                  {mapping_descriptions[level]}
               </p>
            </div>
         </div>
      </React.Fragment>
   )
}

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { CompressionArea }
