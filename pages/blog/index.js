import News from "@/paymee/LandingPage/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/components/Layout";
import BlogHerosection from "@/paymee/LandingPage/BlogHerosection";

export default function Blog() {
  return (
    <Layout>
      <BlogHerosection />
      <News />
      <Subscribe />
    </Layout>
  );
}
