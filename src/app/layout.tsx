import "@/styles/globals.css";
import "@/styles/google-fonts.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ReactNode } from "react";
import { Providers } from "@/store/provider";
import { Layout } from "@/components/layout";

import {
  Pirata_One,
  Fredericka_the_Great,
  Inter,
  IM_Fell_DW_Pica_SC,
} from "next/font/google";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredericka_the_Great = Fredericka_the_Great({
  display: "swap",
  weight: ["400"],
  variable: "--font-fredericka_the_Great",
  subsets: ["latin"],
});

const pirata_One = Pirata_One({
  display: "swap",
  weight: ["400"],
  variable: "--font-Pirata_One",
  subsets: ["latin"],
});

const im_fell_dw = IM_Fell_DW_Pica_SC({
  display: "swap",
  weight: ["400"],
  variable: "--font-im_fell_dw",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pirate's Punch",
  description: "Se prepare para o 'soco' mais intenso dos sete mares!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <head>
        <link rel="icon" href="/images/piratepunch.png" sizes="any" />
      </head>
      <html
        lang="pt-br"
        className={`${inter.variable} ${fredericka_the_Great.variable} ${pirata_One.variable} ${im_fell_dw.variable}`}
      >
        <body>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </body>
      </html>
    </>
  );
}
