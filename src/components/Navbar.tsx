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
import { useState } from "react";

import SidebarCart from "./SidebarCart";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div
        className={`fixed w-80 h-screen ${showCart ? "right-0" : "-right-80"}`}
      >
        <SidebarCart
          setShowCart={setShowCart}
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
                placeholder="Buscar..."
                className="w-full bg-transparent"
              ></input>
              <button className="text-xl mr-2">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
            </div>
            <div className=" md:hidden">
              <FontAwesomeIcon
                icon={faBars}
                className="w-10 mr-3 text-3xl"
              ></FontAwesomeIcon>
            </div>
            <div className="hidden md:flex">
              <button onClick={handleShowCart}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="w-10 text-3xl"
                ></FontAwesomeIcon>
              </button>

              <Link href={"/login"}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-10 text-3xl"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex m-2 space-x-3 justify-end mr-10 text-2xl">
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
