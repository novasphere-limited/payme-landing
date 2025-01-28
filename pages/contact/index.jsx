import ContactForm from "@/components/ContactForm";
import Layout from "@/layout";

export default function ContactPage() {
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
