'use client'

import { LogoCircle } from '@/components/svgs'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { general_routes } from '@/routes/general'
import { DictionaryProps } from '@/types/dictionary'
import Link from 'next/link'

import React from 'react'

const Header: React.FC<DictionaryProps> = ({ dictionary, className }: HeaderProps) => {
   const items = [
      {
         id: 1,
         label: 'Home',
         link: general_routes.home,
         external: false
      },
      {
         id: 1,
         label: 'Área de conversão',
         link: general_routes.converter,
         external: false
      },
      {
         id: 1,
         label: 'GitHub',
         link: 'https://github.com/rafaeelricco/converto-app',
         external: true
      }
   ]

   return (
      <React.Fragment>
         <nav className={cn('absolute z-20 mx-auto w-screen py-8', className)}>
            <div className="container flex items-center justify-between">
               <LogoCircle className="h-10 w-10 antialiased" />
               <div className="grid grid-cols-2 items-center gap-12">
                  <Input placeholder="Pesquisar conversão" />
                  <div className="grid grid-flow-col gap-12">
                     {items.map((item, index) => (
                        <ul className="w-full" key={item.id + index}>
                           <li>
                              <Link
                                 href={item.link}
                                 className="flex-shrink cursor-pointer text-black-500 hover:text-black-500/80 hover:underline"
                                 target={item.external ? '_blank' : '_self'}
                                 rel={item.external ? 'noreferrer' : undefined}
                              >
                                 {item.label}
                              </Link>
                           </li>
                        </ul>
                     ))}
                  </div>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

type HeaderProps = {
   className?: string
   dictionary: DictionaryProps['dictionary']
}

export { Header }
