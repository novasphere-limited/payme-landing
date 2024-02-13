import Image from "next/image";

export default function ImageComponent() {
  return (
    <div className="flex justify-center">
      <Image
        src="/asset/Paymee.png"
        width={160}
        height={63}
        alt="Company logo"
      />
    </div>
  );
}
