import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Address() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  /*   useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]); */

  return <h1>Address page</h1>;
}
