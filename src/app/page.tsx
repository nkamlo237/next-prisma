import { Post } from "@/types/post";

export default function Home() {
  const posts: Post[] = [
    {
      id: "1",
      title: "Post 1",
      content: "Content 1",
      decsription: "Description 1",
      published: true,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
    },
    {
      id: "2",
      title: "Post 2",
      decsription: "Description 2",
      published: false,
      content: "Content 2",
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
    },
    {
      id: "3",
      title: "Post 3",
      content: "Content 3",
      decsription: "Description 3",
      published: true,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
    },
    {
      id: "4",
      title: "Post 4",
      decsription: "Description 4",
      content: "Content 4",
      published: true,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
    },
  ];

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between py-24">
      <div className="w-full items-center justify-center flex-col font-mono flex gap-y-6 lg:gap-y-10">
        <div className="w-full font-bold flex items-center justify-center flex-wrap p-4 gap-x-2 gap-y-2">
          <span>A basic app made with</span>
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
        <div className="w-full max-w-6xl flex flex-col justify-center items-center bg-blue-700">
          <div className="w-full flex items-center justify-between p-4 gap-x-2 gap-y-2 bg-white text-black font-bold">
            <span>#</span>
            <span>Title</span>
            <span>Description</span>
            <span>Created At</span>
            <span>Updated At</span>
            <div className="w-[150px] flex items-center justify-center">
              Actions
            </div>
          </div>
          {posts.map((post: Post, index: number) => (
            <div
              key={post.id}
              className="w-full font-bold flex items-center justify-between p-4 gap-x-2 gap-y-2 border-b border-gray-700"
            >
              <span>{index + 1}</span>
              <span>{post.title}</span>
              <span>{post.decsription}</span>
              <span>{post.createdAt}</span>
              <span>{post.updatedAt}</span>
              <div className="w-[150px] flex justify-center items-center gap-x-4">
                <button className="text-green-500">View</button>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
