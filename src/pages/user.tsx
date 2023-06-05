import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function User() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return <h1>{isAuthenticated && <div>User page</div>}</h1>;
}
