'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  const getLinkClass: (path: string) => string = (path: string) =>
    pathname === path
      ? 'text-muted-blue font-semibold border-b-2 border-muted-blue pb-1'
      : 'text-anchor-blue hover:text-muted-blue hover:border-b-2 hover:border-muted-blue pb-1 transition duration-200'

  return (
    <nav className="bg-navy-dark text-pure-white shadow-lg w-full sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Anchored By God's Word Logo"
              width={128}
              height={128}
              className="w-16 h-16"
            />
            <Link href="/" className="text-2xl font-bold text-anchor-blue hover:text-muted-blue transition duration-200">
              Anchored By God&apos;s Word
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm ${getLinkClass('/')}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm ${getLinkClass('/about')}`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-sm ${getLinkClass('/blog')}`}
            >
              Blog
            </Link>
            <Link
              href="/podcast"
              className={`text-sm ${getLinkClass('/podcast')}`}
            >
              Podcast
            </Link>
            <Link
              href="/video"
              className={`text-sm ${getLinkClass('/video')}`}
            >
              Video
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-anchor-blue hover:text-muted-blue focus:outline-none p-2 rounded-md"
              aria-label="Open mobile menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default, can be expanded later) */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className={`block px-3 py-2 text-sm ${getLinkClass('/about')}`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`block px-3 py-2 text-sm ${getLinkClass('/blog')}`}
            >
              Blog
            </Link>
            <Link
              href="/podcast"
              className={`block px-3 py-2 text-sm ${getLinkClass('/podcast')}`}
            >
              Podcast
            </Link>
            <Link
              href="/video"
              className={`block px-3 py-2 text-sm ${getLinkClass('/video')}`}
            >
              Video
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}