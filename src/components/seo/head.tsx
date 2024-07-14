'use client'

import { useThemeDetector } from '@/hooks/useThemeDetector'
import { Helmet, HelmetData } from 'react-helmet-async'

const helmetData = new HelmetData({})

export const Head: React.FC<HeadProps> = ({ title, description }: HeadProps) => {
   const { theme } = useThemeDetector()
   return (
      <Helmet helmetData={helmetData} title={title}>
         <meta name="description" content={description} />
         <link
            rel="icon"
            href={
               theme == 'dark'
                  ? 'https://res.cloudinary.com/dnqiosdb6/image/upload/v1720996473/Convertio_white_favicon_oyyley.ico'
                  : 'https://res.cloudinary.com/dnqiosdb6/image/upload/v1720996480/Convertio_favicon_black_vbcc8x.ico'
            }
         />
      </Helmet>
   )
}

type HeadProps = {
   title: string
   description: string
}
