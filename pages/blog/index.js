import BlogHerosection from "@/components/BlogHerosection";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/components/Layout";
import BlogSlide from "@/components/BlogSlider";

export default function Blog() {
  return (
    <Layout>
      <div className="navbar-margin">
        <BlogHerosection />
        <BlogSlide />
        <News />
        <Subscribe />
      </div>
    </Layout>
  );
}
