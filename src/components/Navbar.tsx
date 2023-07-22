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
import { logout } from "@/store/reducers/authReducer";
import { RootState, useAppDispatch } from "@/store/store";

import SidebarCart from "./SidebarCart";
import { useRouter } from "next/router";
import { fetchProductsByFilter } from "@/store/actions/products";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [filter, setFilter] = useState("");
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleFilter = () => {
    dispatch(fetchProductsByFilter(filter));
    router.push("/shop");
  };

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="bg-pirates-black-transparent">
      <div
        className={`fixed w-80 h-screen ${showCart ? "right-0" : "-right-80"}`}
      >
        <SidebarCart
          handleShowCart={handleShowCart}
          showCart={showCart}
        ></SidebarCart>
      </div>

      <nav className="w-100 md:max-w-5xl m-auto">
        <div className="flex justify-between ">
          <Link href="/" className="flex items-center mx-1 mr-3">
            <Image
              src={piratepunchlogo}
              className="m-1 lg:my-4"
              width={55}
              alt="piratepunch logo"
            />
            <h1 className="hidden md:inline">Pirate{"'"}s Punch</h1>
          </Link>
          <div className="flex items-center w-full max-w-xs space-x-3 justify-end">
            <div className="flex h-9 w-full max-w-xs bg-transparent border rounded items-center">
              <input
                placeholder="Find..."
                className="w-full bg-transparent pl-4"
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
            <div className="hidden md:flex ">
              <Link href={isAuth ? "/user" : "/login"}>
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

        <ul
          className={`flex flex-col transition-all rounded-xl border border-black md:border-transparent bg-neutral-950 md:bg-transparent md:flex-row p-10 md:p-0 justify-center md:justify-end text-2xl fixed md:relative -z-0  ${
            showNavbar ? "right-0" : "-right-80"
          } md:right-auto text-center`}
          onClick={handleShowNavbar}
        >
          <div className="flex justify-center  border-b pb-5 z-0  md:hidden ">
            {isAuth ? (
              <div>
                <li className="text-green-400 mb-5">
                  <span>{user?.name.toUpperCase()}</span>
                </li>
                <li className="font-imfell px-3 hover:text-pirates-gold">
                  <Link href={"/user"}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`text-xl mr-1`}
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
            <Link href="/" className="font-imfell px-3 hover:text-pirates-gold">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="font-imfell px-3 hover:text-pirates-gold"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-imfell px-3 hover:text-pirates-gold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-imfell px-3 hover:text-pirates-gold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
