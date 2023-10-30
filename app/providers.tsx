'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
const components = {
    Input: {
      baseStyle: {
        field: {
          
        }
      },
      variants: {
        outline: {
          field: {
            borderColor: "blackAlpha.300",
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
            borderColor: "blackAlpha.300",
          }
        }
      }
    },
    Textarea: {
      baseStyle: {
        field: {
        }
      },
      variants: {
        outline: {
            borderColor: "blackAlpha.300",
        }
      }
    }
  
}

const theme = extendTheme({ components });
export const metadata: Metadata = {
  title: 'Card Pro',
  description: 'Digital Cards',
}
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