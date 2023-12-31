"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Roboto_Condensed,Montserrat,Oswald } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from "./providers";
import Navbar from '@/components/Navbar';
import {Grid,GridItem} from '@chakra-ui/react';
import SideNav from '@/components/SideNav';
import { noto_sans, oswald, roboto, roboto_condensed } from '@/constants';
import { usePathname } from 'next/navigation';
import AuthProvider from '@/components/AuthProvider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const pathname = usePathname();
const noHeaders = ['/login','/shared_card','/signup'];
const showHeader = noHeaders.includes(pathname) ? false : true;
  return (
    <html lang="en">
      <body className={noto_sans.className}>
      <AuthProvider>
        <Providers>
          {showHeader ? (
           <> 
              <Navbar/>
              <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
              >
                <GridItem rowSpan={2} colSpan={{base:0,lg:1}} maxHeight={"3xl"} display={{base:'none',lg:'block'}}  >
                    <SideNav/>
                </GridItem>
                <GridItem colSpan={{base:6,lg:5}}  >
                   {children}
                  </GridItem>
              </Grid>
            </>) : children } 
          
        </Providers>
        </AuthProvider>
        </body>
    </html>
  )
}
