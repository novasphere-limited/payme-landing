import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <ContactForm />
        <Map />
      </Layout>
    </div>
  );
}
