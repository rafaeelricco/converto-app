'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.List>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.List
      ref={ref}
      className={cn(
         'inline-flex items-center justify-center rounded-lg bg-[#F4F4F4] p-1.5 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
         className
      )}
      {...props}
   />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
         'inline-flex cursor-default items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 font-sf-pro-display text-sm font-medium text-white-100 ring-offset-white-250 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black-500 data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50',
         className
      )}
      {...props}
   />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Content
      ref={ref}
      className={cn(
         'ring-offset-white mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
         className
      )}
      {...props}
   />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
