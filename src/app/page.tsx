import Hero from '@/components/Hero'
import { Button } from '@headlessui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero title="Anchored By God's Word" subtitle="This is a place to find inspiration and guidance through God's word." />
      <section className="py-8 bg-white">
        <div className="anchor-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-anchor-blue mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest blog posts, podcast episodes, and video teachings designed to strengthen your faith.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-anchor-blue text-center">Latest Blog</h3>
              <div className="text-center">
                <Link href="/blog">
                  <Button className="mt-4 bg-anchor-blue text-white">
                    View All Blog Posts
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-anchor-blue text-center">Latest Podcast</h3>
              <div className="text-center">
                <Link href="/podcast">
                  <Button className="mt-4 bg-anchor-blue text-white">
                    View All Episodes
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-anchor-blue text-center">Latest Video</h3>
              
              <div className="text-center">
                <Link href="/video">
                  <Button className="mt-4 bg-anchor-blue text-white">
                    View All Videos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}