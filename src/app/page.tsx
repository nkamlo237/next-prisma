"use client";

import CardLoader from "@/components/loader/CardLoader";
import Skeleton from "@/components/skeleton/Skeleton";
import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPosts = async () => {
    const response = await fetch("/api/posts", {
      method: "GET", // Specify the method
    });

    console.log("response", response);

    if (!response.ok) {
      // Handle the error response
      console.error("Failed to fetch posts:", response.status);
      return;
    }

    const posts: Post[] = await response.json();
    const formattedPosts = posts.map((post) => ({
      ...post,
      createdAt: new Date(post.createdAt), // Convert back to Date object
      updatedAt: new Date(post.updatedAt),
    }));

    console.log("posts", formattedPosts);
    setPosts(formattedPosts);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []); //eslint-disable-line

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between py-24">
      <div className="w-full items-center justify-center flex-col font-mono flex gap-y-6 lg:gap-y-10">
        <div className="w-full font-bold flex items-center justify-center flex-wrap p-4 gap-x-2 gap-y-2">
          <span>Made with</span>
          <a
            href="https://nextjs.org/docs/getting-started/installation"
            target="_blank"
            rel="noreferrer noopen"
            className="text-blue-500 hover:underline"
          >
            Next.js(typescript)
          </a>
          ,{" "}
          <a
            href="https://redux-toolkit.js.org/introduction/getting-started"
            target="_blank"
            rel="noreferrer noopen"
            className="text-blue-500 hover:underline"
          >
            Redux
          </a>
          ,{" "}
          <a
            href="https://www.prisma.io/docs/getting-started/quickstart"
            target="_blank"
            rel="noreferrer noopen"
            className="text-blue-500 hover:underline"
          >
            Prisma
          </a>
          ,{" "}
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer noopen"
            className="text-blue-500 hover:underline"
          >
            PostgreSQL
          </a>
          , and
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer noopen"
            className="text-blue-500 hover:underline"
          >
            TailwindCSS
          </a>
          .
        </div>
        <h2 className="text-4xl font-bold">ALL POSTS</h2>
        <button className="px-3 py-2 font-bold bg-blue-500 border border-blue-500 rounded-md">
          + Add Post
        </button>
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="hidden w-full max-w-6xl lg:flex flex-col justify-center items-center ">
            <div className="w-full flex items-center justify-between p-4 gap-x-2 gap-y-2 bg-white text-black font-bold">
              <span>#</span>
              <span className="w-[10rem] flex items-center justify-center">
                Title
              </span>
              <span className="w-[14rem] flex items-center justify-center">
                Description
              </span>
              <span className="w-[9rem] flex items-center justify-center">
                Created At
              </span>
              <span className="w-[9rem] flex items-center justify-center">
                Updated At
              </span>
              <div className="w-[9.4rem] flex items-center justify-center">
                Actions
              </div>
            </div>
            {posts.map((post: Post, index: number) => (
              <div
                key={post.id}
                className="w-full font-bold flex items-center justify-between p-4 gap-x-2 gap-y-2 border-b border-gray-700"
              >
                <span>{index + 1}</span>
                <span className="w-[10rem] flex items-center justify-center">
                  {post.title}
                </span>
                <span className="w-[14rem] flex items-center justify-center">
                  {post.description}
                </span>
                <span className="w-[9rem] flex items-center justify-center">
                  {post.createdAt.toDateString()}
                </span>
                <span className="w-[9rem] flex items-center justify-center">
                  {post.updatedAt.toDateString()}
                </span>
                <div className="w-[9.4rem] flex justify-center items-center gap-x-4">
                  <Link href={`/posts/${post.id}`} className="text-green-500">
                    View
                  </Link>
                  <button className="text-red-500">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading ? (
          <CardLoader />
        ) : (
          <div className="w-full font-bold grid grid-cols-12 md:gap-4 lg:hidden p-4">
            {posts.map((post: Post, index: number) => (
              <div key={post.id} className="col-span-12 md:col-span-6 p-4 flex">
                <div className="bg-white shadow-lg rounded-lg flex flex-col flex-grow">
                  <div className="pb-4 px-4 pt-2 flex-col flex">
                    <span className="self-end text-gray-400">{index + 1}</span>
                    <span className="text-lg font-semibold text-gray-800">
                      {post.title}
                    </span>
                    <span className="text-gray-600 mt-2 mb-4">
                      {post.description}
                    </span>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{new Date(post.createdAt).toDateString()}</span>
                      <span>{new Date(post.updatedAt).toDateString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between p-4 border-t border-gray-200">
                    <Link
                      href={`/posts/${post.id}`}
                      className="text-green-500 hover:underline"
                    >
                      View
                    </Link>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
