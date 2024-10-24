"use client";

import PostDetail from "@/components/PostDetail";
import RecentPostsSidebar from "@/components/RecentPostsSidebar";
import { useParams } from "next/navigation";

function PostPage() {
  const { slug } = useParams();
  const postId = Number(Array.isArray(slug) ? slug[0] : slug);
  return (
    <div className="px-4 py-20 md:py-24 mt-8 lg:mt-16 md:px-6 lg:px-8">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10">
        <div className="md:col-span-2">
          <PostDetail postId={postId} />
        </div>
        <div className="md:col-span-1">
          <RecentPostsSidebar />
        </div>
      </section>
    </div>
  );
}

export default PostPage;
