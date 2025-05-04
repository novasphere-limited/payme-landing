import BlogHerosection from "@/components/BlogHerosection";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/layout";
import BlogSlide from "@/components/BlogSlider";
import { useGetBlogPosts } from "@/service/blog";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

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
              <div className="h-[50vh] flex flex-col items-center justify-center text-black">
                <FontAwesomeIcon
                  icon={faInbox}
                  className="text-6xl mb-4 text-gray-400"
                />
                <p className="font-bold text-center lg:text-4xl text-[3xl]">
                  Oopz! No blog content...
                </p>
              </div>
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
