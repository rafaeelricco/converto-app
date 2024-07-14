'use client'

import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const Header: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-black flex h-fit w-full items-center justify-between gap-12 rounded-[3rem] border-[1px] border-[#5A606E] border-opacity-[24%] px-2 py-2 font-sf-pro-display backdrop-blur lg:min-h-[60px] lg:w-fit lg:px-4 lg:py-3">
            test
         </div>
      </React.Fragment>
   )
}

export { Header }
