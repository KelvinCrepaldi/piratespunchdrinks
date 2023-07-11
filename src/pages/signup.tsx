import Link from "next/link";
import FormSignup from "@/components/FormSignup";

import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16 flex flex-col items-center">
      <FormSignup />
      <Link className="text-center mt-5" href={"/login"}>
        <p>já possui uma conta?</p>
      </Link>
    </main>
  );
}
