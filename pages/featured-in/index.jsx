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
    };

    setFeaturedContentsFilter({ ...data });
    setFetchData(true);
  }, []);

  return (
    <Layout>
      <div className="navbar-margin">
        <BlogHerosection />
        {featuredContentsData?.items && (
          <div>
            <FeaturedSlide data={featuredContentsData?.items[0]} />
            <FeaturedNews data={featuredContentsData?.items.slice(1)} />
          </div>
        )}
        <Subscribe />
      </div>
    </Layout>
  );
}
