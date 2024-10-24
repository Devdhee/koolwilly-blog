import { Post } from "@/lib/typesDefinition";
import Link from "next/link";

type PostPreviewProps = {
  post: Post;
};

function SidebarPostPreview({ post }: PostPreviewProps) {
  const { title, id } = post;
  return (
    <p className="text-sm text-muted-foreground underline px-6">
      <Link href={`/posts/${id}`}> {title}</Link>
    </p>
  );
}

export default SidebarPostPreview;
