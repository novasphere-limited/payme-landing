import ImageComponent from "./ImageComponent";

export default function FormLayout({ children }) {
  return (
    <div className="flex justify-center page-center">
      <ImageComponent />
      <div className="lg:w-1/2 sm:w-3/4 w-full">{children}</div>
    </div>
  );
}
