import SocialMedia from "./SocialPage";
import Image from "next/image";
import Link from "next/link";
import NavTab from "./NavTab";
import { useEffect, useState } from "react";
import { useGetBlogInfo } from "@/service/blog";

export default function InnerBlog({ id }) {
  const [fetchData, setFetchData] = useState(false);
  const {
    getBlogInfoData,
    getBlogInfoIsLoading,
    filterGetBlogInfo,
    getBlogError,
  } = useGetBlogInfo({ enabled: fetchData });
  useEffect(() => {
    if (id) {
      filterGetBlogInfo(id);
      setFetchData(true);
    }
  }, [id]);

  const formatDate = (isoString) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(isoString));
  };

  if (getBlogInfoIsLoading) {
    return (
      <div className="font-bold text-center pt-6 text-4xl text-black">
        Fetching blog details!!!
      </div>
    );
  }

  if (getBlogError) {
    return (
      <div className="font-bold text-center pt-6 text-4xl text-black">
        Oopz! An error occured.
      </div>
    );
  }

  return (
    <div className="xl:mb-[120px] lg:mb-[90px] md:mb-[70px] sm:mb-[55px] mb-[44px]">
      <NavTab />
      <div className="flex justify-center">
        <h4 className="text-xs text-warning600 md:my-[37.7px] my-[32px] bg-[#CFECE1] p-1">
          ANNOUNCEMENTS
        </h4>
      </div>
      <div className="flex justify-center text-center mb-4">
        <h1
          className="xl:text-[50px] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium"
          style={{ maxWidth: "900px" }}
        >
          {getBlogInfoData?.title}
        </h1>
      </div>
      <h6 className="text-[#1F1F1F] text-center mb-[44px] font-normal text-sm md:text-base">
        {formatDate(
          getBlogInfoData?.created_date || "2025-01-12T10:15:13.194Z"
        )}
      </h6>
      <div className="xl:mx-[120px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
        <div className="flex justify-center mb-5 h-[565px] overflow-hidden">
          <Image
            alt="Inner blog image"
            src={
              getBlogInfoData?.fileUrl ||
              "https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356898/PayyMe/Man_s_hands_close-up_holding_cup_of_coffee_and_a_newspaper_znpz7e.png"
            }
            height={565}
            width={1032}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="grid-inner_blog gap-4">
          <div>
            <div className="flex items-center xl:gap-4 lg:gap-3 md:gap-2 gap-1 mb-[52px]">
              <div
                style={{ height: "44px", width: "44px" }}
                className="rounded-full bg-[#D9D9D9]"
              >
                <Image
                  src="/asset/nova-slider-avatar.png"
                  alt="Testimonial person profile"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <h4 className="text-[#1F1F1F] font-medium md:text-base text-sm">
                  {getBlogInfoData?.full_name || "Anonymous"}
                </h4>
              </div>
            </div>
            <div>
              <p className="md:text-base text-sm font-normal mb-3">
                Share this article
              </p>
              <SocialMedia />
            </div>
          </div>
          <div
            className="font-normal text-sm mb-[22px] text-[#444444]"
            dangerouslySetInnerHTML={{
              __html: getBlogInfoData?.content,
            }}
          />
          {/* <div>
            <h6 className="xl:text-lg text-xs md:text-base font-normal italic md:mb-8 mb-6">
              Earlier today, Chief Executive Officer Ham Serunjogi shared the
              following note on the Company’s organizational changes with all
              employees.
            </h6>
            <p className="text-base font-normal mb-4">Hey everyone</p>
            <div className="text-[#696969] md:mb-[62px] mb-[44px] text-sm md:text-base">
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
              <br />
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
              <br />
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
            </div>
            <div className="my-6 flex justify-center">
              <Image
                src="/asset/nova-innerblog-vid.png"
                alt="Inner blog video"
                height={329}
                width={336}
              />
            </div>
            <p>
              In the fast-paced world of technology, staying abreast of the
              latest trends and developments is not just an option; it&apos;s a
              necessity. From ground-breaking innovations to transformative
              disruptions, the tech industry continues to reshape our lives,
              economies, and societies at an unprecedented pace. In this
              article, we&apos;ll delve into the dynamic realm of technology,
              exploring its current landscape and the key trends shaping its
              future trajectory.
            </p>

            <p className="text-base font-medium mb-8">Read more:</p>
            <ul className="text-sm md:text-base">
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
