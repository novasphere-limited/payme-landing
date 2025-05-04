import BlogHerosection from "@/components/BlogHerosection";
import Subscribe from "@/components/Subscribe";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import { useGetFeaturedIn } from "@/service/featured-in";
import FeaturedSlide from "@/components/featuredSlide";
import FeaturedNews from "@/components/featuredNews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

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
              <div className="h-[50vh] flex flex-col items-center justify-center text-black">
                <FontAwesomeIcon
                  icon={faInbox}
                  className="text-6xl mb-4 text-gray-400"
                />
                <p className="font-bold text-center lg:text-4xl text-[3xl]">
                  Oopz! No featured-in content...
                </p>
              </div>
            ) : (
              <div>
                <FeaturedSlide data={featuredContentsData?.items[0]} />
                {featuredContentsData?.items.length > 1 && (
                  <FeaturedNews data={featuredContentsData?.items.slice(1)} />
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
