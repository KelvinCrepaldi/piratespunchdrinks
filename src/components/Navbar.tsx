import Image from "next/image";
import Link from "next/link";
import piratepunchlogo from "/public/images/piratepunch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/reducers/authReducer";

import SidebarCart from "./SidebarCart";
import { useRouter } from "next/router";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

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
    <>
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
          <div className="flex items-center mx-1 mr-3">
            {" "}
            <Image
              src={piratepunchlogo}
              className="m-1"
              width={55}
              alt="piratepunch logo"
            />
            <h1 className="hidden md:inline">Pirate{"'"}s Punch</h1>
          </div>
          <div className="flex items-center w-full max-w-xs space-x-3 justify-end">
            <div className="flex h-9 w-full max-w-xs bg-transparent border rounded items-center">
              <input
                placeholder="Find..."
                className="w-full bg-transparent pl-4"
              ></input>
              <button className="text-xl mr-2">
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
            <div
              className={`hidden md:flex ${
                isAuth ? "text-green-300" : "text-red-300"
              }`}
            >
              <Link href={isAuth ? "/user" : "/login"}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-10 text-3xl"
                ></FontAwesomeIcon>
              </Link>
              {isAuth && <button onClick={handleLogOut}>logout</button>}
            </div>
          </div>
        </div>
        <ul
          className={`flex flex-col md:flex-row m-2 space-x-3 justify-end mr-10 text-2xl fixed md:relative  ${
            showNavbar ? "right-0" : "-right-80"
          } md:right-auto text-center`}
        >
          <li>
            <Link href="/" className="font-imfell">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="font-imfell">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-imfell">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-imfell">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
