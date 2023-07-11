import Link from "next/link";

import FormLogin from "@/components/FormLogin";
export default function Login() {
  return (
    <>
      <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
        <FormLogin />
        <Link className="text-center mt-5" href={"/signup"}>
          <p>Criar uma conta?</p>
        </Link>
      </main>
    </>
  );
}
