import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <div className="circ-bg-img">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}
