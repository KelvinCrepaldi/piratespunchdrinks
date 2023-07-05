import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/reducers/authReducer";

export default function ProtectedRoute({ children }: { children: any }) {
  const dispatch = useAppDispatch();
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
