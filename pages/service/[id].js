import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function InnerServicePage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Inner service page: {id}</div>;
}
