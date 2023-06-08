import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/reducers/authReducer";

export default function ProtectedRoute({ children }: { children: any }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout());
      router.push("/login");
    }
  }, [dispatch, isAuthenticated, router]);

  return children;
}
