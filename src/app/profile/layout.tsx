"use client";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import { IUserPages } from "@/interfaces/userPage.interface";
import { Button } from "@/components/_ui/Button/Button";
import Link from "next/link";

const paths = [
  { text: "Perfil", href: "profile" },
  { text: "Endereço", href: "profile/address" },
  { text: "Cartões", href: "profile/creditCards" },
  { text: "Compras", href: "profile/purchases" },
  {
    text: <span className="text-red-500">Desativar conta</span>,
    href: "profile/deleteAccount",
  },
];

export default function ProfileLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>Profile - Pirates Punch Drinks</title>
        <meta name="description" content="Pirates Punch Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProtectedRoute>
        <div className="flex flex-col md:flex-row w-full max-w-[1250px] m-auto min-h-screen font-inter bg-zinc-300">
          <aside className="flex flex-row flex-wrap md:flex-col items-end divide-y divide-zinc-400  border-r">
            {paths.map((pathx: any, index) => (
              <Link
                className="w-full px-5 py-3 hover:bg-zinc-200 text-center font-inter text-lg text-pirates-black"
                href={pathx.href}
                key={index}
              >
                {pathx.text}
              </Link>
            ))}
          </aside>

          <main className=" w-full m-1 px-5 md:px-10  py-5  rounded">
            {children}
          </main>
        </div>
      </ProtectedRoute>
    </>
  );
}
