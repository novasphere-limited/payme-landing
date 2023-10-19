import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="main-container flex">
      <div>
        <h1 className="header-1_medium">Hello,</h1>
      </div>
      <div>
        <Image
          src="/asset/nova-blog_img.png"
          alt="Novasphere contact picture"
          width={593}
          height={752}
        />
      </div>
    </div>
  );
}
