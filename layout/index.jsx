import Footer from "@/parts/footer";
import Navbar from "@/parts/navbar";

export default function Layout({ children }) {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </section>
  );
}
