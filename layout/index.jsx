import Footer from "@/parts/footer";
import Navbar from "@/parts/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
