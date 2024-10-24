import { BLOG_POSTS } from "@/lib/content";
import { Post } from "@/lib/typesDefinition";
import SidebarPostPreview from "./SidebarPostPreview";
import { Card, CardHeader, CardTitle } from "./ui/card";

function RecentPostsSidebar() {
  const posts: Post[] = BLOG_POSTS;

  const sortedPosts = posts
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 8);
  return (
    <Card className="hidden md:block py-5 max-w-sm mx-auto min-h-[500px] lg:ml-0 mt-10">
      <CardHeader>
        <CardTitle>Recent posts</CardTitle>
      </CardHeader>
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <SidebarPostPreview key={post.id} post={post} />
        ))}
      </div>
    </Card>
  );
}

export default RecentPostsSidebar;
