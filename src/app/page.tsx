"use client";
import Image from "next/image";

import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces/product.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { fetchPromotions } from "@/store/reducers/highlightsReducer";
import { IPromotion } from "@/interfaces/highlights.interface";
import { ContainerEventPromo } from "@/components/_ui/ContainerEventPromo";
import Hero from "./components/Hero/Hero";
import PromotionProducts from "./components/PromotionProducts/PromotionProducts";
import HighlightedBenefits from "./components/HighlightedBenefits/HighlightedBenefits";
import JoinSignup from "./components/JoinSignup/JoinSignup";
import PiratesPromoEvents from "./components/PiratesPromoEvents/PiratesPromoEvents";
import Newsletter from "@/components/sections/Newsletter/Newsletter";

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const promotions: IPromotion[] = useSelector(
    (state: RootState) => state.highlights.promotionProducts
  );

  useEffect(() => {
    dispatch(fetchPromotions());
  }, [dispatch]);

  return (
    <main className=" m-auto">
      <Hero />
      <HighlightedBenefits />

      <PromotionProducts
        promotion={promotions[0]}
        title="Tesouros do Convés Principal!"
      />
      <JoinSignup />
      <PromotionProducts
        promotion={promotions[0]}
        title="Descobertas Recentes nas Ondas do Mar!"
      />
      <PiratesPromoEvents />
      <Newsletter />
    </main>
  );
}
