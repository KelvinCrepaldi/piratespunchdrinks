"use client";
import Link from "next/link";
import { FormLogin } from "./components/FormLogin";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetErrorMessages } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";

export default function Login(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginStatus, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(resetErrorMessages());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16 flex flex-col items-center ">
        <FormLogin />
        <div className="text-center">
          {loginStatus.error && (
            <span className="text-red-400">{loginStatus.error}</span>
          )}
        </div>
        <Link
          className="text-center mt-5 hover:text-pirates-gold"
          href={"/signup"}
        >
          <p>Criar uma conta?</p>
        </Link>
      </main>
    </>
  );
}
