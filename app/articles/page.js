import Link from "next/link";

export default function PostsPage() {
  return (
    <div className="flex p-2">
      <h1 className="font-bold text-3xl">Articles Page</h1>
      <Link href="/" className="w-fit">
      </Link>
    </div>
  )
}