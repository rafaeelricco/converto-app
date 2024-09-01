import { cn } from '@/utils/cn'
import React from 'react'
/**
 * @notice The Spinner component provides a visual representation of a loading state.
 * @param {Object} props The properties provided to the component.
 * @param {string} [props.color='white'] The color of the spinner.
 * @param {string} [props.size='24px'] The width and height of the spinner.
 * @param {string} [props.borderWidth='3px'] The border width of the spinner.
 */
const Spinner: React.FC<SpinnerProps> = ({ size = '24px', borderWidth = '3px', className }: SpinnerProps) => {
   const style = {
      width: size,
      height: size,
      borderWidth: borderWidth
   }

   return (
      <span
         className={cn(
            'relative inline-block rounded-full border-[#c5c5c5]',
            'after:absolute after:inset-[-3px] after:block after:content-[""]',
            'after:rounded-full after:border-[3px] after:border-solid',
            'after:border-r-white-main after:border-b-white-main after:border-l-transparent after:border-t-transparent',
            'after:animate-spin',
            className
         )}
         style={style}
      ></span>
   )
}

type SpinnerProps = {
   size?: string
   borderWidth?: string
   color?: string
   className?: string
}

export default Spinner
