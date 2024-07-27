'use client'

import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const CompressionArea: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   return (
      <React.Fragment>
         <div className="container grid grid-cols-[0.5fr_1fr] gap-6">
            <div className="min-h-[632px] rounded-lg border border-white-250 p-4">container 1</div>
            <div className="min-h-[632px] rounded-lg border border-white-250 p-4">container 2</div>
         </div>
      </React.Fragment>
   )
}

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { CompressionArea }
