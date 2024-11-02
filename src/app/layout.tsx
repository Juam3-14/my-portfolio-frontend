'use client'

import { AppProvider, useAppContext } from '../context/AppContext'
import './globals.css'

function RootLayoutInner({
  children,
}: {
  children: React.ReactNode
}) {
  const { language, theme } = useAppContext()

  return (
    <html lang={language}>
      <body className={theme}>
        {children}
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <RootLayoutInner>{children}</RootLayoutInner>
    </AppProvider>
  )
}