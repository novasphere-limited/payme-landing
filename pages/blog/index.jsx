import BlogHerosection from "@/components/BlogHerosection";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import Layout from "@/layout";
import BlogSlide from "@/components/BlogSlider";
import { useGetBlogPosts } from "@/service/blog";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import NavTab from "@/components/NavTab";
import Image from "next/image";

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

        <NavTab />

        {blogsContentData?.items && (
          <>
            {blogsContentData?.items?.length < 1 ? (
              <div className="h-[50vh] flex flex-col items-center justify-center text-black">
                <Image
                  height={100}
                  width={100}
                  alt="EMpty icon"
                  src="/asset/empty-post.png"
                />
                <p className="font-bold text-center lg:text-4xl text-[3xl]">
                  Oopz! No blog content...
                </p>
              </div>
            ) : (
              <div>
                <BlogSlide data={blogsContentData?.items[0]} />
                {blogsContentData?.items.length > 1 && (
                  <News data={blogsContentData?.items.slice(1)} />
                )}
              </div>
            )}
          </>
        )}
        <Subscribe />
      </div>
    </Layout>
  );
}
