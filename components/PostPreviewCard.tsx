import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/lib/typesDefinition";
import { formatDate } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type PostPreviewCardProps = {
  post: Post;
};

function PostPreviewCard({ post }: PostPreviewCardProps) {
  const { id, content, title, created_at } = post;
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{formatDate(created_at)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-5 text-sm">{content}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/posts/${id}`}>
          <Button variant="ghost">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PostPreviewCard;
