'use client'

import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const CompressionArea: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   return (
      <React.Fragment>
         <div className="relative min-h-screen overflow-hidden">
            <div className="border-white-250 container rounded-lg border p-4"> test</div>
         </div>
      </React.Fragment>
   )
}

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { CompressionArea }
