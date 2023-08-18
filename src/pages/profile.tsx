import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import { PanelUser } from "@/components/profile/PanelUser/PanelUser";
import { PanelAddresses } from "@/components/profile/PanelAddresses/PanelAddresses";
import { PanelCreditCards } from "@/components/profile/PanelCreditCards/PanelCreditCards";
import { PanelCartHistory } from "@/components/profile/PanelCartHistory/PanelCartHistory";
import { IUserPages } from "@/interfaces/userPage.interface";
import { deleteAccount } from "@/store/reducers/userReducer";
import { Button } from "@/components/_ui/Button/Button";

export default function Profile(): JSX.Element {
  const router = useRouter();
  const [page, setPage] = useState<string>("user");
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useDispatch();

  const pages: IUserPages = {
    user: <PanelUser />,
    orders: <PanelCartHistory />,
    creditcards: <PanelCreditCards></PanelCreditCards>,
    addresses: <PanelAddresses></PanelAddresses>,
  };

  useEffect(() => {
    const { option } = router.query;

    if (option) {
      setPage(option.toString());
    }
  }, [router.query]);

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  const handleOptionPage = (pageName: string): void => {
    setPage(pageName);
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  return (
    <>
      <Head>
        <title>User - Pirates Punch Drinks</title>
        <meta name="description" content="Pirates Punch Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProtectedRoute>
        <main className="flex flex-col md:flex-row max-w-5xl m-auto min-h-screen font-inter bg-neutral-950 rounded border border-zinc-700 p-1">
          <div className="flex flex-row flex-wrap md:flex-col items-end md:min-w-max">
            <Button onClick={() => handleOptionPage("user")}>Perfil</Button>
            <Button onClick={() => handleOptionPage("addresses")}>
              Endereços
            </Button>
            <Button onClick={() => handleOptionPage("creditcards")}>
              Cartões
            </Button>
            <Button onClick={() => handleOptionPage("orders")}>Compras</Button>
            <Button onClick={handleDeleteAccount}>Desativar conta</Button>
          </div>

          <div className=" w-full m-1 px-5 md:px-10   py-5 bg-neutral-900 rounded border border-zinc-700">
            {pages[page]}
          </div>
        </main>
      </ProtectedRoute>
    </>
  );
}
