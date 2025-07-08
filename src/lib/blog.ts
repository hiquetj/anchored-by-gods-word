import { BlogPost } from 'types'

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the first blog post.',
    author: 'Admin',
    date: '2023-10-01',
  },
]

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const localPosts = localStorage.getItem('blogPosts')
  const additionalPosts: BlogPost[] = localPosts ? JSON.parse(localPosts) : []
  return [...mockBlogPosts, ...additionalPosts]
}

export const addBlogPost = async (post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> => {
  const localPosts = localStorage.getItem('blogPosts')
  const existingPosts: BlogPost[] = localPosts ? JSON.parse(localPosts) : []

  const newPost: BlogPost = {
    id: Date.now().toString(),
    title: post.title,
    content: post.content,
    author: post.author,
    date: new Date().toISOString(),
  }

  const updatedPosts = [...existingPosts, newPost]
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))

  return newPost
}