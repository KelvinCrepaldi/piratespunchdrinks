import { useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ProtectedRoute from "@/components/ProtectedRoute";
import PanelUser from "@/components/PanelUser";
import PanelAddresses from "@/components/PanelAddresses";
import PanelCreditCards from "@/components/PanelCreditCards";
import PanelCartHistory from "@/components/PanelCartHistory";
import { IUserPages } from "@/interfaces/userPage.interface";
import { deleteAccount } from "@/store/reducers/userReducer";
import Head from "next/head";

export default function User(): ReactNode {
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
  }, []);

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
        <main className="flex flex-col md:flex-row max-w-5xl m-auto min-h-screen font-inter">
          <div className="flex flex-row flex-wrap md:flex-col items-end  border-r-2 color p-2 md:min-w-max">
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("user")}
            >
              User
            </button>
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("addresses")}
            >
              Addresses
            </button>
            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("creditcards")}
            >
              Credit Cards
            </button>

            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none bg-pirates-black-transparent md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("orders")}
            >
              Purchases
            </button>

            <button
              className="m-1 py-1 px-4 md:px-1 rounded md:rounded-none md:border-t bg-pirates-black-transparent text-red-500 md:bg-transparent text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>

          <div className=" w-full px-5 md:px-10   py-5 ">{pages[page]}</div>
        </main>
      </ProtectedRoute>
    </>
  );
}
