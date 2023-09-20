import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/reducers/userReducer";
import { ReactNode } from "react";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";

interface IProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({
  children,
}: IProtectedRouteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout());
      router.push("/login");
    }
  }, [dispatch, isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-[50vh] flex justify-center items-center">
        <LoadingSpinner />{" "}
      </div>
    );
  } else {
    return <>{children}</>;
  }
}
