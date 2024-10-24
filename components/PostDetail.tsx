import { BLOG_POSTS } from "@/lib/content";
import { Post } from "@/lib/typesDefinition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/lib/utils";

type PostDetailProps = {
  postId: number;
};

function PostDetail({ postId }: PostDetailProps) {
  const posts: Post[] = BLOG_POSTS;

  const post = posts.find((post) => post.id === postId);

  const paragraphs = post?.content.split("\n").filter((p) => p.trim());

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Card className="border-0 shadow-none max-w-md px-0 lg:max-w-lg mx-auto">
      <CardHeader className="px-0">
        <CardTitle className="lg:text-lg">{post.title}</CardTitle>
        <CardDescription>{formatDate(post.created_at)}</CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="leading-6 [&:not(:first-child)]:mt-6 text-sm lg:text-base lg:leading-7 text-justify"
          >
            {paragraph.trim()}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

export default PostDetail;
