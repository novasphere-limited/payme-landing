import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import InnerBlog from "@/components/InnerBlog";

export default function BlogInfo() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="navbar-margin">
        <InnerBlog />
      </div>
    </Layout>
  );
}
