import { useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function User(): ReactNode {
  const [page, setPage] = useState<string>("user");
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  interface IUserPages {
    [key: string]: ReactNode;
  }
  const pages: IUserPages = {
    user: <>user</>,
    address: <>address</>,
    card: <>card</>,
    history: <>history</>,
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
        <div className="flex max-w-5xl   m-auto min-h-screen">
          <div className="flex flex-col items-end  border-r color ">
            <button
              className="m-1 p-1 font-fredericka text-xl"
              onClick={() => handleOptionPage("user")}
            >
              User
            </button>
            <button
              className="m-1 p-1 font-fredericka text-xl"
              onClick={() => handleOptionPage("address")}
            >
              address
            </button>
            <button
              className="m-1 p-1 font-fredericka text-xl"
              onClick={() => handleOptionPage("card")}
            >
              card
            </button>
            <button
              className="m-1 p-1 font-fredericka text-xl"
              onClick={() => handleOptionPage("history")}
            >
              history
            </button>
          </div>

          <div className=" w-full bg-black">{pages[page]}</div>
        </div>
      </ProtectedRoute>
    </>
  );
}
