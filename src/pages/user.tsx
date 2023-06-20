import { useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

import PanelUser from "@/components/PanelUser";
import PanelCartHistory from "@/components/PanelCartHistory";

export default function User(): ReactNode {
  const [page, setPage] = useState<string>("user");
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  interface IUserPages {
    [key: string]: ReactNode;
  }
  const pages: IUserPages = {
    user: <PanelUser />,
    history: <PanelCartHistory />,
  };

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  const handleOptionPage = (pageName: string): void => {
    setPage(pageName);
  };

  return (
    <>
      <ProtectedRoute>
        <div className="flex max-w-5xl m-auto min-h-screen ">
          <div className="flex flex-col items-end  border-r color p-2">
            <button
              className="m-1 text-xl md:text-2xl font-inter"
              onClick={() => handleOptionPage("user")}
            >
              User
            </button>

            <button
              className="m-1 text-xl md:text-2xl  font-inter"
              onClick={() => handleOptionPage("history")}
            >
              Purchases
            </button>
          </div>

          <div className=" w-full px-5 md:px-10   py-5 ">{pages[page]}</div>
        </div>
      </ProtectedRoute>
    </>
  );
}
