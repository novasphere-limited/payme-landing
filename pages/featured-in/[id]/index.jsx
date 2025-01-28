import { useRouter } from "next/router";
import Layout from "@/layout";
import InnerFeatured from "@/components/innerFeatured";

export default function FeaturedInfo() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="navbar-margin">
        <InnerFeatured id={id} />
      </div>
    </Layout>
  );
}
