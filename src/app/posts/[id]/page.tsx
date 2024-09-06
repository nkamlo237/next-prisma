import prisma from "@/lib/db";
import React from "react";

const Post = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  return <div>{post?.title}</div>;
};

export default Post;
