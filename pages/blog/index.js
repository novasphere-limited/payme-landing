import BlogHerosection from "@/components/BlogHerosection";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <BlogHerosection />
      <News />
      <Subscribe />
    </Layout>
  );
}
