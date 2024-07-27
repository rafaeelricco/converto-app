'use client'

import { LogoCircle, PanelLeftIcon } from '@/components/svgs'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { general_routes } from '@/routes/general'
import { DictionaryProps } from '@/types/dictionary'
import { Button } from 'components/ui/button'

import Link from 'next/link'
import React from 'react'

const Header: React.FC<DictionaryProps> = ({ dictionary, className }: HeaderProps) => {
   return (
      <React.Fragment>
         <nav className={cn('absolute z-20 mx-auto w-screen py-8', className)}>
            <div className="container flex items-center justify-between">
               <LogoCircle className="h-10 w-10 antialiased" />
               <div className="grid grid-cols-2 items-center gap-12">
                  <Input placeholder="Pesquisar conversão" className="hidden lg:block" />
                  <div className="hidden grid-flow-col gap-12 lg:grid">
                     {items.map((item, index) => (
                        <ul className="w-full" key={item.id + index}>
                           <li>
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger asChild>
                                       <Link
                                          href={item.link}
                                          className="flex-shrink cursor-pointer font-sf-pro-display text-black-500 hover:text-black-500/80 hover:underline"
                                          target={item.external ? '_blank' : '_self'}
                                          rel={item.external ? 'noreferrer' : undefined}
                                       >
                                          {item.label}
                                       </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                       <p className="font-sf-pro-display text-base">{item.tooltip}</p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </li>
                        </ul>
                     ))}
                  </div>
               </div>
               <div className="lg:hidden">
                  <Sheet>
                     <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                           <PanelLeftIcon className="h-5 w-5" />
                           <span className="sr-only">Toggle Menu</span>
                        </Button>
                     </SheetTrigger>
                     <SheetContent side="right" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                           <Link
                              href="#"
                              className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                              prefetch={false}
                           >
                              <span className="sr-only">© 2024 Ricco Ltda. All rights reserved.</span>
                           </Link>
                           {items.map((item, index) => (
                              <Link
                                 key={item.id + index}
                                 href={item.link}
                                 className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5 hover:underline"
                                 prefetch={false}
                              >
                                 {item.label}
                              </Link>
                           ))}
                        </nav>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

const items = [
   {
      id: 1,
      label: 'Home',
      tooltip: 'Página inicial',
      disabled: false,
      link: general_routes.home,
      external: false
   },
   {
      id: 2,
      label: 'Compressão',
      tooltip: 'Área de compressão de arquivos.',
      disabled: false,
      link: general_routes.compression,
      external: false
   },
   {
      id: 3,
      label: 'Conversão',
      tooltip: 'Área de conversão de arquivos.',
      disabled: false,
      link: general_routes.converter,
      external: false
   },
   {
      id: 4,
      label: 'GitHub',
      tooltip: 'Repositório do projeto.',
      disabled: false,
      link: 'https://github.com/rafaeelricco/converto-app',
      external: true
   }
]

type HeaderProps = {
   className?: string
   dictionary: DictionaryProps['dictionary']
}

export { Header }
