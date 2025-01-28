import BlogHerosection from "@/components/BlogHerosection";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/layout";
import BlogSlide from "@/components/BlogSlider";
import { useGetBlogPosts } from "@/service/blog";
import { useEffect, useState } from "react";

export default function Blog() {
  const [fetchData, setFetchData] = useState(false);
  const {
    blogsContentData,
    blogsContentIsLoading,
    setBlogContentFilter,
    refetchBlogContent,
  } = useGetBlogPosts({ enabled: fetchData });
  useEffect(() => {
    const data = {
      limit: 100,
      page: 1,
      isPayme: true,
    };

    setBlogContentFilter({ ...data });
    setFetchData(true);
  }, []);

  return (
    <Layout>
      <div className="navbar-margin">
        <BlogHerosection />
        {blogsContentData?.items && (
          <>
            {blogsContentData?.items?.length < 1 ? (
              <p className="font-bold text-center pt-6 text-4xl text-black">
                Oopz! No content...
              </p>
            ) : (
              <div>
                <BlogSlide data={blogsContentData?.items[0]} />
                <News data={blogsContentData?.items.slice(1)} />
              </div>
            )}
          </>
        )}
        <Subscribe />
      </div>
    </Layout>
  );
}
