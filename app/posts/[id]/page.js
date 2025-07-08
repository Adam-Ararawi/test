import Link from "next/link";

export default async function PostPage(props) {
  const { id } = await props.params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return (
    <div className="p-2 relative mt-5">
      {/* زر العودة */}
      <Link
        href="/posts"
        className="absolute top-2 left-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        العودة
      </Link>

      <h1 className="font-bold text-3xl text-center mt-5">Post Details</h1>

      <div className="flex flex-col gap-3 mt-8 max-w-2xl mx-auto p-4 bg-neutral-900 rounded-lg shadow">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p className="text-neutral-300">{post.body}</p>
      </div>
    </div>
  );
}