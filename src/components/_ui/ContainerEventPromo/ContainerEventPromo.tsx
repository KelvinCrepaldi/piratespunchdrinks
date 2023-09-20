import { ReactNode } from "react";
import pirateEventImage from "/public/images/pirateevent.svg";
import Image from "next/image";

interface IContainerEventPromoProps {
  children: ReactNode;
}

export const ContainerEventPromo = ({
  children,
}: IContainerEventPromoProps): JSX.Element => {
  return (
    <div className="my-6 text-center p-10 rounded-lg bg-pirates-shop-card border border-zinc-900  relative mt-16">
      <Image
        className="absolute -top-14 lg:-top-14 lg:w-44 w-auto h-auto"
        src={pirateEventImage}
        alt="Pirate event promo svg"
      ></Image>

      {children}
    </div>
  );
};
