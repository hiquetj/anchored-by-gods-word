import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
  <footer className="bg-navy-dark text-white py-12">
      <div className="anchor-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-anchor-blue mb-4">
              Anchored By God&apos;s Word
            </h3>
            <p className="text-pure-white mb-6">
              Inspiring believers to find strength, hope, and guidance through God&apos;s timeless Word.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-300 hover:text-anchor-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-anchor-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-anchor-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-anchor-gold transition-colors">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold text-anchor-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-pure-white hover:text-anchor-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-pure-white hover:text-anchor-gold transition-colors">About</Link>
              </li>
              <li>
                <Link href="/blog" className="text-pure-white hover:text-anchor-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/podcast" className="text-pure-white hover:text-anchor-gold transition-colors">Podcast</Link>
              </li>
              <li>
                <Link href="/video" className="text-pure-white hover:text-anchor-gold transition-colors">Video</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold text-anchor-blue mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-3">
              {/* <Mail size={18} className="text-anchor-gold" /> */}
              <a href="mailto:info@anchoredbygod.com" className="text-gray-300 hover:text-anchor-gold transition-colors">
                info@anchoredbygod.com
              </a>
            </div>
            <p className="text-pure-white mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full focus:ring-anchor-gold focus:border-anchor-gold rounded-l-md text-pure-white"
              />
              <button className="bg-anchor-blue hover:bg-anchor-gold transition-colors px-4 py-2 rounded-r-md text-pure-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-pure-white">
          <p>© {currentYear} Anchored By God&apos;s Word. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}