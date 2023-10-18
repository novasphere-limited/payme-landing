import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="main-container blog-post_grid1 gap-3">
      <div>
        <div>
          <Image
            src="/asset/nova-blog_img.png"
            alt="Novasphere blog hero picture"
            width={753}
            height={410}
            className="rounded-md"
          />
        </div>
        <div className="m-3">
          <h5 className="header-4_bold mb-2">
            We help give the perfect solution to your Business
          </h5>
          <p className="text-2_regular mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-2_bold mb-1">Aiden John</p>
          <p className="text-3_regular">13, February 2023</p>
        </div>
      </div>
      <div>
        <h4 className="header-4_medium mb-5">Featured Post</h4>
        <div className="ps-3">
          <div className="rounded-md shadow-md p-4">
            <h6 className="label-2_medium mb-2">
              We help give the perfect solution to your Business
            </h6>
            <p className="text-2_regular mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="text-2_bold mb-1">Aiden John</p>
            <p className="text-3_regular">13, February 2023</p>
          </div>
          <div className="rounded-md shadow-md p-4">
            <h6 className="label-2_medium mb-2">
              We help give the perfect solution to your Business
            </h6>
            <p className="text-2_regular mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="text-2_bold mb-1">Aiden John</p>
            <p className="text-3_regular">13, February 2023</p>
          </div>
          <div className="rounded-md shadow-md p-4">
            <h6 className="label-2_medium mb-2">
              We help give the perfect solution to your Business
            </h6>
            <p className="text-2_regular mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="text-2_bold mb-1">Aiden John</p>
            <p className="text-3_regular">13, February 2023</p>
          </div>
          <div className="rounded-md shadow-md p-4">
            <h6 className="label-2_medium mb-2">
              We help give the perfect solution to your Business
            </h6>
            <p className="text-2_regular mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="text-2_bold mb-1">Aiden John</p>
            <p className="text-3_regular">13, February 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
