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
        <main className="flex flex-col md:flex-row max-w-5xl m-auto min-h-screen font-inter ">
          <div className="flex flex-row flex-wrap md:flex-col items-end  border-r-2 color p-2 md:min-w-max">
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("user")}
            >
              Perfil
            </button>
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("addresses")}
            >
              Endereços
            </button>
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("creditcards")}
            >
              Cartões
            </button>

            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("orders")}
            >
              Compras
            </button>

            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none md:border-t bg-pirates-black-transparent text-red-500 md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={handleDeleteAccount}
            >
              Desativar conta
            </button>
          </div>

          <div className=" w-full m-3 rounded px-5 md:px-10   py-5 bg-pirates-black-transparent-strong rounded">
            {pages[page]}
          </div>
        </main>
      </ProtectedRoute>
    </>
  );
}
