import Image from "next/image";
import Link from "next/link";
import piratepunchlogo from "/public/images/piratepunch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { logout } from "@/store/reducers/userReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { useRouter } from "next/router";

interface IHeaderProps {
  handleShowCart: () => void;
}

export const Header = ({ handleShowCart }: IHeaderProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [filter, setFilter] = useState("");
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleFilter = () => {
    router.push("/shop");
  };

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <header className="bg-pirates-black-transparent-strong relative z-10 backdrop-blur border-b-2 border-pirates-black pb-2">
        <div className="w-100 md:max-w-5xl m-auto">
          <div className="flex justify-between ">
            <Link href="/" className="flex items-center mx-1 mr-3">
              <Image
                src={piratepunchlogo}
                className="my-1"
                width={50}
                alt="piratepunch logo"
              />
              <h1 className="hidden md:inline font-fredericka">
                Pirate{"'"}s Punch
              </h1>
            </Link>
            <div className="flex items-center space-x-3 justify-end flex-grow">
              <div
                className="rounded p-2 pl-3 
              w-full hover:border-neutral-300 focus:border-pirates-red border 
            border-neutral-500 text-pirates-gold flex h-9  max-w-xs  items-center "
              >
                <input
                  placeholder="Find..."
                  className="w-full bg-transparent pl-4 focus:outline-none"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                ></input>
                <button className="text-xl mr-2" onClick={handleFilter}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </div>

              <button onClick={handleShowCart}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="w-10 text-3xl"
                ></FontAwesomeIcon>
              </button>
              <button className=" md:hidden" onClick={handleShowNavbar}>
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-10 mr-3 text-3xl"
                ></FontAwesomeIcon>
              </button>
              <div className="hidden md:flex pr-4">
                <Link href={isAuth ? "/profile" : "/login"}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`hidden md:flex text-3xl ${
                      isAuth
                        ? "text-green-300 hover:text-green-600"
                        : "text-red-300"
                    }`}
                  ></FontAwesomeIcon>
                </Link>

                {isAuth && (
                  <button
                    className="mx-1 cursor-pointer text-white hover:text-red-400"
                    onClick={handleLogOut}
                  >
                    <FontAwesomeIcon
                      className="text-3xl mx-3"
                      icon={faRightFromBracket}
                    ></FontAwesomeIcon>
                  </button>
                )}
              </div>
            </div>
          </div>

          <nav
            className={` ${!showNavbar && "hidden"} md:flex md:justify-start`}
          >
            <ul
              className={`  flex flex-col transition-all rounded-bl-md md:border-transparent bg-pirates-black-transparent md:bg-transparent md:flex-row p-10 md:p-0 justify-center md:justify-end text-2xl absolute md:static md:right-auto text-center right-0`}
              onClick={handleCloseNavbar}
            >
              <div
                className={`flex justify-center  border-b pb-5 relative  md:hidden`}
              >
                {isAuth ? (
                  <div className="z-10">
                    <li className="text-green-400 mb-5">
                      <span>{user?.name.toUpperCase()}</span>
                    </li>
                    <li className="font-imfell px-3 hover:text-pirates-gold">
                      <Link href={"/profile"}>
                        <FontAwesomeIcon
                          icon={faUser}
                          className={`text-xl mr-1 `}
                        ></FontAwesomeIcon>
                        User page
                      </Link>
                    </li>
                    <li className="font-imfell px-3 hover:text-pirates-gold">
                      <button onClick={handleLogOut}>
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className={`text-xl mr-1`}
                        ></FontAwesomeIcon>{" "}
                        Logout
                      </button>
                    </li>
                  </div>
                ) : (
                  <Link className="hover:text-pirates-gold" href={"/login"}>
                    Login
                  </Link>
                )}
                <div></div>
              </div>
              <li>
                <Link
                  href="/"
                  className="font-imfell px-3 hover:text-pirates-gold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="font-imfell px-3 hover:text-pirates-gold"
                >
                  Bebidas
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-imfell px-3 hover:text-pirates-gold"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-imfell px-3 hover:text-pirates-gold"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
