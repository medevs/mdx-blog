import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Welcome to Primal Bound, a blog that takes you on a journey into the tapestry of daily life, exploring the primal instincts that shape our existence.',
};

export default function Posts() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Blog Posts</h1>
      <hr className='my-2' />
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h4>{post.title}</h4>
          </Link>
          {/* {post.description && <p>{post.description}</p>} */}
        </article>
      ))}
    </div>
  )
}
