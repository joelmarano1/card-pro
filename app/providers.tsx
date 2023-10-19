'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Montserrat } from 'next/font/google';
const components = {
  fonts:{
    heading: "Open Sans",
    subHeading: "Times New Roman",
    body: "Courier",
  },
  components:{
    Input: {
      baseStyle: {
        field: {
        
        }
      },
      variants: {
        outline: {
          field: {
            borderColor: "gray.300",
          }
        }
      }
    },
    Select: {
      baseStyle: {
        field: {
        
        }
      },
      variants: {
        outline: {
          field: {
            borderColor: "gray.300",
          }
        }
      }
    }
  }
}

const theme = extendTheme({ components });

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}