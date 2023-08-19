"use client";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import { PanelAddresses } from "@/components/profile/PanelAddresses/PanelAddresses";
import { PanelCreditCards } from "@/components/profile/PanelCreditCards/PanelCreditCards";
import { PanelCartHistory } from "@/components/profile/PanelCartHistory/PanelCartHistory";
import { IUserPages } from "@/interfaces/userPage.interface";
import { Button } from "@/components/_ui/Button/Button";
import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [page, setPage] = useState<string>("user");
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useDispatch();

  const pages: IUserPages = {
    orders: <PanelCartHistory />,
    creditcards: <PanelCreditCards></PanelCreditCards>,
    addresses: <PanelAddresses></PanelAddresses>,
  };

  useEffect(() => {}, []);

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  const handleOptionPage = (pageName: string): void => {
    setPage(pageName);
  };

  return (
    <>
      <Head>
        <title>Profile - Pirates Punch Drinks</title>
        <meta name="description" content="Pirates Punch Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProtectedRoute>
        <div className="flex flex-col md:flex-row max-w-5xl m-auto min-h-screen font-inter bg-pirates-shop-card rounded border-l border-r border-zinc-700 p-1">
          <aside className="flex flex-row flex-wrap md:flex-col items-end md:min-w-max divide-y divide-zinc-900 m-3">
            <Link
              className="w-full p-3 hover:bg-pirates-card-dark text-center font-inter text-lg"
              href={"profile"}
            >
              <>Perfil</>
            </Link>
            <Link
              className="w-full p-3 hover:bg-pirates-card-dark text-center font-inter text-lg"
              href={"profile/address"}
            >
              <>Endereço</>
            </Link>
            <Link
              className="w-full p-3 hover:bg-pirates-card-dark text-center font-inter text-lg"
              href={"profile/creditCards"}
            >
              <>Cartões</>
            </Link>
            <Link
              className="w-full p-3 hover:bg-pirates-card-dark text-center font-inter text-lg"
              href={"profile/purchases"}
            >
              <>Compras</>
            </Link>
            <Link
              className="w-full p-3 hover:bg-pirates-card-dark text-center font-inter text-lg"
              href={"profile/deleteAccount"}
            >
              <>
                <span className="text-red-500">Desativar conta</span>
              </>
            </Link>
          </aside>

          <main className=" w-full m-1 px-5 md:px-10   py-5  rounded">
            {children}
          </main>
        </div>
      </ProtectedRoute>
    </>
  );
}
