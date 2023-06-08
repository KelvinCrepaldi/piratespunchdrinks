import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function User() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <ProtectedRoute>
        <h1>
          {isAuth && <div>User page here</div>}
          <div>
            <Link href={"/user/address"}>address</Link>
            <Link href={"/user/creditcard"}>credit card</Link>
            <Link href={"/user/purchasehistory"}>purchase history</Link>
          </div>
        </h1>
      </ProtectedRoute>
    </>
  );
}
