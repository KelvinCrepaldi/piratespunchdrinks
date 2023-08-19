"use client";
import { Button } from "@/components/_ui/Button/Button";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import { resetCheckoutStates } from "@/store/reducers/ordersReducer";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Cart(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCheckoutStates());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <main className="flex flex-col max-w-5xl m-auto min-h-screen">
        Obrigado por comprar
        <Link href={"/"}>
          <Button>Voltar</Button>
        </Link>
      </main>
    </ProtectedRoute>
  );
}
