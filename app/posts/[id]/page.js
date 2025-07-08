import Link from "next/link";

export default async function PostPage(props) {
  const { id } = await props.params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return (
    <div className="p-4 relative">
      {/* زر العودة المعدل */}
      <Link
        href="/posts"
        className="fixed sm:absolute top-4 left-4 bg-neutral-800 hover:bg-neutral-700 text-white p-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg transition-all duration-200 flex items-center gap-1 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:mr-1"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">back</span>
      </Link>

      <h1 className="font-bold text-3xl text-center mt-3 sm:mt-2 pt-2 sm:pt-0">Post Details</h1>

      <div className="flex flex-col gap-3 mt-8 max-w-2xl mx-auto p-4 sm:p-6 bg-neutral-900 rounded-lg shadow">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p className="text-neutral-300">{post.body}</p>
      </div>
    </div>
  );
}