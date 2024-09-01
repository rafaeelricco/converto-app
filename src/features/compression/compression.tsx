'use client'

import * as Icon from '@/components/svgs/compression-level'

import { columns } from '@/app/[lang]/compression/components/columns'
import { DataTable } from '@/app/[lang]/compression/components/data-table'

import { Button } from '@/components/ui/button'
import { Dropzone } from '@/components/ui/dropzone'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DictionaryProps } from '@/types/dictionary'
import { cn } from '@/utils/cn'

import React from 'react'

enum TabOptions {
   COMPRESSION_LEVEL = 'compression_level',
   ADVANCED_SETTINGS = 'advanced_settings'
}

const CompressionArea: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   const [level, setLevel] = React.useState<'low' | 'medium' | 'high' | null>(null)
   const [files, setFiles] = React.useState<File[]>([])
   const tasks = [
      {
         id: 'TASK-8782',
         title: "You can't compress the program without quantifying the open-source SSD pixel!",
         status: 'in progress',
         label: 'documentation',
         priority: 'medium'
      },
      {
         id: 'TASK-7878',
         title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
         status: 'backlog',
         label: 'documentation',
         priority: 'medium'
      },
      {
         id: 'TASK-7839',
         title: 'We need to bypass the neural TCP card!',
         status: 'todo',
         label: 'bug',
         priority: 'high'
      },
      {
         id: 'TASK-5562',
         title: 'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
         status: 'backlog',
         label: 'feature',
         priority: 'medium'
      },
      {
         id: 'TASK-8686',
         title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
         status: 'canceled',
         label: 'feature',
         priority: 'medium'
      },
      {
         id: 'TASK-1280',
         title: 'Use the digital TLS panel, then you can transmit the haptic system!',
         status: 'done',
         label: 'bug',
         priority: 'high'
      },
      {
         id: 'TASK-7262',
         title: 'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
         status: 'done',
         label: 'feature',
         priority: 'high'
      },
      {
         id: 'TASK-1138',
         title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
         status: 'in progress',
         label: 'feature',
         priority: 'medium'
      },
      {
         id: 'TASK-7184',
         title: 'We need to program the back-end THX pixel!',
         status: 'todo',
         label: 'feature',
         priority: 'low'
      },
      {
         id: 'TASK-5160',
         title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
         status: 'in progress',
         label: 'documentation',
         priority: 'high'
      }
   ]
   return (
      <React.Fragment>
         <div className="container grid gap-6 lg:grid-cols-[0.75fr_1fr]">
            <div className="space-y-4 rounded-lg border border-white-250 p-4">
               <Dropzone onDropFiles={(files) => setFiles(files)} />
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
                        <TabsTrigger value={TabOptions.COMPRESSION_LEVEL}>Nível de compressão</TabsTrigger>
                        <TabsTrigger value={TabOptions.ADVANCED_SETTINGS}>Configurações avançadas</TabsTrigger>
                     </TabsList>
                     <TabsContent value={TabOptions.COMPRESSION_LEVEL}>
                        <div className="space-y-4">
                           {levels_options.map((l) => (
                              <CompressionOption
                                 key={l.id}
                                 level={l.value as 'low' | 'medium' | 'high'}
                                 selected={l.value === level || false}
                                 onSelect={(level) => setLevel(level)}
                              />
                           ))}
                           <Button className="w-full" onClick={() => console.log('Comprimir')}>
                              Iniciar compressão
                           </Button>
                        </div>
                     </TabsContent>
                     <TabsContent value={TabOptions.ADVANCED_SETTINGS}>pass</TabsContent>
                  </Tabs>
               </div>
            </div>
            <div className="min-h-[632px] rounded-lg border border-white-250 p-4">
               <div>
                  <DataTable data={tasks} columns={columns} />
               </div>
            </div>
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
                  'bg-black-500': selected,
                  '[&_svg]:invert': selected
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

const levels_options = [
   {
      id: '1',
      label: 'Baixo',
      value: 'low'
   },
   {
      id: '2',
      label: 'Médio',
      value: 'medium'
   },
   {
      id: '3',
      label: 'Alto',
      value: 'high'
   }
]

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { CompressionArea }
