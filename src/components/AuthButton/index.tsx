'use client'

import Link from 'next/link'
import AuthButton from 'components/AuthButton'

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Anchored By Gods Word
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/blog" className="hover:text-gray-200">
              Blog
            </Link>
            <Link href="/podcast" className="hover:text-gray-200">
              Podcast
            </Link>
            <Link href="/video" className="hover:text-gray-200">
              Video
            </Link>
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  )
}