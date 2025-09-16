import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import BlogImage from '@/components/BlogImage'

const MAX_DISPLAY = 8

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            {siteMetadata.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative w-full" style={{ paddingBottom: '18%' }}>
            <iframe
              src="https://www.gitch.art/api/og/yi-echo?color=2da44e"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="GitHub Stats"
              loading="lazy"
            />
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-4 xl:grid xl:grid-cols-12 xl:items-start xl:space-y-0 xl:gap-8">
                    {/* 左侧：日期和图片 */}
                    <div className="xl:col-span-3">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400 mb-4">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      {images && images.length > 0 && (
                        <div className="hidden xl:block">
                          <BlogImage 
                            src={images[0]} 
                            alt={title || 'Blog post image'} 
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* 右侧：标题、标签、摘要和链接 */}
                    <div className="space-y-5 xl:col-span-9">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        
                        {/* 移动端图片显示 */}
                        {images && images.length > 0 && (
                          <div className="xl:hidden">
                            <BlogImage 
                              src={images[0]} 
                              alt={title || 'Blog post image'} 
                              className="w-full"
                            />
                          </div>
                        )}
                        
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
