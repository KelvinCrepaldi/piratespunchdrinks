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
export default function Navbar() {
  return (
    <nav className="w-100 md:max-w-5xl m-auto">
      <div className="flex border-b justify-between ">
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
          <div className="flex h-8 w-full max-w-xs bg-transparent border rounded items-center">
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
              className="w-10 text-3xl"
            ></FontAwesomeIcon>
          </div>
          <div className="hidden md:flex">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-10 text-3xl"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faUser}
              className="w-10 text-3xl"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <ul className="flex m-2 space-x-3 justify-end mr-10 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
