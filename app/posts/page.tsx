import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

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
