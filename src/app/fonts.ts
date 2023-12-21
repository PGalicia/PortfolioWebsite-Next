import { Poppins, Source_Serif_4 } from 'next/font/google'
 
export const poppins = Poppins({
  weight: ['100', '400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
 
export const source = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})