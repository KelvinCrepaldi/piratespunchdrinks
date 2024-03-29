"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { resetErrorMessages } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";
import FormSignup from "./components/FormSignup/FormSignup";

export default function Signup(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const { signupStatus, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    dispatch(resetErrorMessages());
  }, [dispatch, router]);
  return (
    <main className="w-full m-auto p-5 md:p-16 flex flex-col items-center bg-zinc-900">
      <FormSignup />
      <div className="text-center">
        {signupStatus.error && (
          <span className="text-red-400">{signupStatus.error}</span>
        )}
      </div>
      <Link
        className="text-center mt-5 hover:text-pirates-gold"
        href={"/login"}
      >
        <p className="hover:text-pirates-gold">Já possui uma conta?</p>
      </Link>
    </main>
  );
}
