import BlogHerosection from "@/components/BlogHerosection";
import Subscribe from "@/components/Subscribe";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import { useGetFeaturedIn } from "@/service/featured-in";
import FeaturedSlide from "@/components/featuredSlide";
import FeaturedNews from "@/components/featuredNews";

export default function Blog() {
  const [fetchData, setFetchData] = useState(false);
  const {
    featuredContentsData,
    featuredContentsIsLoading,
    refetchFeaturedContents,
    setFeaturedContentsFilter,
  } = useGetFeaturedIn({ enabled: fetchData });
  useEffect(() => {
    const data = {
      limit: 100,
      page: 1,
      isPayme: true,
    };

    setFeaturedContentsFilter({ ...data });
    setFetchData(true);
  }, []);

  return (
    <Layout>
      <div className="navbar-margin">
        <BlogHerosection />
        {featuredContentsData?.items && (
          <>
            {featuredContentsData?.items?.length < 1 ? (
              <p className="font-bold text-center pt-6 text-4xl text-black">
                Oopz! No content...
              </p>
            ) : (
              <div>
                <FeaturedSlide data={featuredContentsData?.items[0]} />
                <FeaturedNews data={featuredContentsData?.items.slice(1)} />
              </div>
            )}
          </>
        )}
        <Subscribe />
      </div>
    </Layout>
  );
}
