import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function User() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <h1>
      {isAuthenticated && <div>User page here</div>}
      <Link href={"/user/address"}>address</Link>
    </h1>
  );
}
