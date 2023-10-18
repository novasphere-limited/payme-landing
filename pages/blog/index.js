import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import LatestBlogPost from "@/components/LatestBlogPost";

export default function BlogPage() {
  return (
    <div>
      <Blog />
      <BlogPost />
      <LatestBlogPost />
    </div>
  );
}
