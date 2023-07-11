import { useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ProtectedRoute from "@/components/ProtectedRoute";
import PanelUser from "@/components/PanelUser";
import PanelAddresses from "@/components/PanelAddresses";
import PanelCreditCards from "@/components/PanelCreditCards";
import PanelCartHistory from "@/components/PanelCartHistory";
import { IUserPages } from "@/interfaces/userPage.interface";

export default function User(): ReactNode {
  const router = useRouter();
  const [page, setPage] = useState<string>("user");
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);

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

  return (
    <>
      <ProtectedRoute>
        <main className="flex max-w-5xl m-auto min-h-screen font-inter">
          <div className="flex flex-col items-end  border-r color p-2 min-w-max">
            <button
              className="m-1 text-xl md:text-xl font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("user")}
            >
              User
            </button>
            <button
              className="m-1 text-xl md:text-xl  font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("addresses")}
            >
              Addresses
            </button>
            <button
              className="m-1 text-xl md:text-xl  font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("creditcards")}
            >
              Credit Cards
            </button>

            <button
              className="m-1 text-xl md:text-xl  font-inter whitespace-no-wrap"
              onClick={() => handleOptionPage("orders")}
            >
              Purchases
            </button>
          </div>

          <div className=" w-full px-5 md:px-10   py-5 ">{pages[page]}</div>
        </main>
      </ProtectedRoute>
    </>
  );
}
