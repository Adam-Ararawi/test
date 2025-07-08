"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    (async () => {  // ✅ صحيح: IIFE تسمح باستخدام `await` دون تغيير نوع إرجاع `useEffect`
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        cache: "force-cache",
        next: {
          revalidate: 60, //isg عدد الثواني يلي رح يكون فيه cache
        }
      }
      );
      const result = await response.json();
      setTodo(result);
    })();
  }, []);

  return (
    <div className="p-2">
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  )
}