import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// Ensure this path is correct

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany(); // Fetch posts from your database
    return new NextResponse(JSON.stringify(posts)); // Return the posts as JSON
  } catch (error) {
    console.error("Error fetching posts:", error); // Log the error
    return NextResponse.error(); // Return a generic error response
  }
}

