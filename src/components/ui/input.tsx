import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
   return (
      <input
         type={type}
         className={cn(
            'ring-offset-white flex h-10 w-full rounded-md border border-white-300 bg-transparent px-3 py-2 text-base file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:font-sf-pro-display placeholder:text-white-300 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
            className
         )}
         ref={ref}
         {...props}
      />
   )
})
Input.displayName = 'Input'

export { Input }
