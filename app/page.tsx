import PostPreviewCard from "@/components/PostPreviewCard";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/content";
import { Post } from "@/lib/typesDefinition";
import Link from "next/link";

export default async function Home() {
  const posts: Post[] = BLOG_POSTS;

  const sortedPosts = posts
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 8);

  return (
    <div className="px-4 py-20 md:py-24 mt-8 lg:mt-16 md:px-6 lg:px-8">
      <section className="container mx-auto">
        <h2 className="mb-5 text-center sm:text-left text-xl lg:text-2xl font-medium">
          Recent posts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 justify-around lg:grid-cols-3 xl:grid-cols-4 mb-10">
          {sortedPosts.map((post) => (
            <PostPreviewCard post={post} key={post.id} />
          ))}
        </div>
        <span className="flex justify-center">
          <Link href="/posts">
            <Button>View All Posts</Button>
          </Link>
        </span>
      </section>
    </div>
  );
}
