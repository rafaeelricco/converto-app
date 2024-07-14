import { DictionaryProps } from '@/types/dictionary'
import React from 'react'

const HomeComponent: React.FC<HomeProps> = ({ dictionary }: HomeProps) => {
   return <React.Fragment>home</React.Fragment>
}

type HomeProps = {
   dictionary: DictionaryProps['dictionary']
}

export { HomeComponent }
