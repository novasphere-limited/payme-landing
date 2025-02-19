import TermHerosection from "@/components/terms-contitons";
import Legals from "@/components/terms-contitons/legal";
import Layout from "@/layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="navbar-margin">
        <TermHerosection />
      </div>
      <Legals />
    </Layout>
  );
}
