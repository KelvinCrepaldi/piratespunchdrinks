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
    <div className="my-6 text-center p-10 rounded-lg bg-pirates-black-transparent border-2 border-pirates-black-transparent-strong relative mt-16">
      <Image
        className="absolute -top-14 lg:-top-14 lg:w-44"
        src={pirateEventImage}
        alt="Pirate event promo svg"
      ></Image>

      {children}
    </div>
  );
};
