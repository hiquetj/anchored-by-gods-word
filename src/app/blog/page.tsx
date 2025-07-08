'use client'

import { useEffect, useState } from 'react'
import { getBlogPosts } from 'lib/blog'
import { BlogPost } from 'types'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getBlogPosts()
      setPosts(fetchedPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              By {post.author} on {post.date}
            </p>
            <p className="mt-2 text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}