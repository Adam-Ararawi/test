import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: "no-store", //ssr
    // cache: "force-cache", //ssg
    cache: "force-cache",
    next: {
      revalidate: 120, //isg عدد الثواني يلي رح يكون فيه cache
    }
  })
  const posts = await response.json()

  const postsJSX = posts.map(post => (
    <article
      key={post.id}
      className="bg-neutral-900 border border-neutral-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in   hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="p-5 flex-1">
        <h2 className="text-xl font-semibold text-neutral-2 00 mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-neutral-600 mb-4 line-clamp-3 text-sm">
          {post.body}
        </p>
      </div>
      <div className="px-5 pb-5">
        <Link
          href={`/posts/${post.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-800 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-colors duration-150 border border-neutral-300"
        >
          Read More
          <svg className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  ));

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Posts
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsJSX}
        </div>
      </div>
    </main>
  );
}