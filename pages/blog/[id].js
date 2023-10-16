import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import SocialPage from "@/components/SocialPage";
import Subscribe from "@/components/Subscribe";
import Layout from "@/components/Layout";

export default function BlogInfo() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="main-container">
        <p className="mb-4">Blog info page: {id}</p>
        <h5 className="label-1_medium mb-5 grnSec">
          Finance: Insights, Tips, and Trends
        </h5>
        <p className="text-1_regular mb-5">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Transforming Ideas into Digital
          Realities, Where Meets Innovation. Your Partner
        </p>
        <p className="text-1_medium mb-1">Felix Ade</p>
        <p className="text-1_regular">May 20, 2023. 2 mins read</p>
        <div className="">
          <Image
            src="/asset/inner-img.png"
            alt="Info picture"
            width={1333}
            height={684}
            className="rounded-lg"
          />
        </div>
        <h1 className="label-4_regular my-4">
          <span className="ms-10 header-1_black">T</span>ransforming Ideas into
          Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution Transforming Ideas into Digital Realities, Where
          Vision Meets Innovation. Your Partner in Technology Evolution
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution Transforming Ideas into Digital Realities, Where
          Vision Meets Innovation. Your Partner in Technology Evolution
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution Transforming Ideas into Digital Realities, Where
          Vision Meets Innovation. Your Partner in Technology Evolution
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution deas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution Transforming Ideas into Digital Realities, Where
          Vision Meets Innovation. Your Partner in Technology Evolution
        </h1>
        <div className="flex my-5 justify-end">
          <SocialPage color="#000000" />
        </div>
        <div>
          <div className="grid-3 mb-4">
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src="/asset/news-img.png"
                  width={424}
                  height={380}
                  alt="News picture"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">
                  {" "}
                  Finance: Insights, Tips, and Trends
                </h4>
                <p className="text-1_regular mb-3">
                  Transforming Ideas into Digital Realities, Where Vision Meets
                  Innovation. Your Partner in Technology Evolution Transforming
                  Ideas into Digital Realities, Where Vision Meets Innovation.
                  Your Partner in Technology Evolution.
                </p>
                <p className="text-1_medium mb-3">Felix Ade</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src="/asset/news-img.png"
                  width={424}
                  height={380}
                  alt="News picture"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">
                  {" "}
                  Finance: Insights, Tips, and Trends
                </h4>
                <p className="text-1_regular mb-3">
                  Transforming Ideas into Digital Realities, Where Vision Meets
                  Innovation. Your Partner in Technology Evolution Transforming
                  Ideas into Digital Realities, Where Vision Meets Innovation.
                  Your Partner in Technology Evolution.
                </p>
                <p className="text-1_medium mb-3">Felix Ade</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src="/asset/news-img.png"
                  width={424}
                  height={380}
                  alt="News picture"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">
                  {" "}
                  Finance: Insights, Tips, and Trends
                </h4>
                <p className="text-1_regular mb-3">
                  Transforming Ideas into Digital Realities, Where Vision Meets
                  Innovation. Your Partner in Technology Evolution Transforming
                  Ideas into Digital Realities, Where Vision Meets Innovation.
                  Your Partner in Technology Evolution.
                </p>
                <p className="text-1_medium mb-3">Felix Ade</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </Layout>
  );
}
