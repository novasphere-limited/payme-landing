import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <div className="circ-bg-img">
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
}
