import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image';
// import { getBlogViews } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';
export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <Link href="/blog" className="flex items-center">
            {/* <ViewsIcon /> */}
            {/* {`${views.toLocaleString()} blog views all time`} */}
          </Link>
        </div>
      </div>
      <div className="prose dark:prose-invert">
        <h2>Latest Posts</h2>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h4>{post.title}</h4>
          </Link>
          {/* {post.description && <p>{post.description}</p>} */}
        </article>
      ))}
    </div>
    </section>
  )
}
