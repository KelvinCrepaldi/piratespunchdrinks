"use client";
import { Button } from "@/components/_ui/Button/Button";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import Link from "next/link";

export default function Cart(): JSX.Element {
  return (
    <ProtectedRoute>
      <main className="flex flex-col max-w-5xl m-auto min-h-screen items-center space-y-5 font-imfell text-center">
        <h1 className="font-fredericka pt-5 border-b-2 border-pirates-red">
          Obrigado por comprar na Pirate{"'"}s Punch!
        </h1>
        <p className="text-lg md:text-xl">
          Agradecemos por escolher nossos produtos. Sua compra foi recebida com
          sucesso.
        </p>
        <p className="text-lg md:text-xl">
          Seu pedido está sendo processado e será enviado em breve.
        </p>
        <p className="text-lg md:text-xl">
          Caso precise de assistência adicional, entre em contato conosco.
        </p>

        <div>
          <Link className=" text-xl" href={"/profile/purchases"}>
            <Button>Ver histórico de compras</Button>
          </Link>

          <Link className="text-xl" href={"/shop"}>
            <Button>Continuar comprando</Button>
          </Link>

          <Link className=" text-xl" href={"/"}>
            <Button>Voltar</Button>
          </Link>
        </div>
      </main>
    </ProtectedRoute>
  );
}
