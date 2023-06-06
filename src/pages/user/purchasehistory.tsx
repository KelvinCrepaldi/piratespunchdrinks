import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function PurchaseHistory() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return <h1>{isAuthenticated && <div>creditCard page</div>}</h1>;
}
