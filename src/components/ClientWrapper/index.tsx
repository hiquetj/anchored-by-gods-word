'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted ? (
        <>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </>
      ) : null}
    </>
  )
}