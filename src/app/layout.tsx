import React from "react"
import Navbar from '../app/auth/components/navbar'
import { StoreProvider } from "./store/StoreProvider"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
    <html lang="en">
      <body>
        {children}</body>
    </html>
    </StoreProvider>
  )
}

