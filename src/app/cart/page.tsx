"use client";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute/ProtectedRoute";
import { IAddress } from "@/interfaces/address.interface";
import { ICreditCard } from "@/interfaces/creditCards.interface";
import { IProduct } from "@/interfaces/product.interface";
import { fetchAddresses } from "@/store/reducers/addressesReducer";
import { fetchCreditCards } from "@/store/reducers/creditCardsReducer";
import { createOrder } from "@/store/reducers/ordersReducer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressCheckbox } from "@/app/cart/components/AddressCheckbox";
import { Button } from "@/components/_ui/Button/Button";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { CreditCardCheckbox } from "./components/CreditCardCheckbox/CreditCardCheckbox";
import { ProductCard } from "./components/ProductCard";
import formatReal from "@/utils/formatReal";

export default function Cart(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const cartList = useSelector((state: any) => state.cart.cartList);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );
  const { error } = useSelector((state: RootState) => state.orders);
  const [selectedAddress, setSelectAddress] = useState<IAddress | false>(false);
  const [selectedCreditCard, setSelectedCreditCard] = useState<
    ICreditCard | false
  >(false);

  const totalValue = cartList.reduce((acc: number, obj: IProduct) => {
    return acc + parseFloat(obj.price) * obj.qtd;
  }, 0);

  const handleCheckout = async () => {
    try {
      const action = await dispatch(
        createOrder({
          products: cartList,
          address: selectedAddress,
          creditCard: selectedCreditCard,
        })
      );

      if (createOrder.fulfilled.match(action)) {
        router.push("/cart/checkout");
      }
    } catch (err) {
      throw err;
    }
  };

  const handleSelectAddress = (e: IAddress) => {
    setSelectAddress(e);
  };

  const handleSelectCard = (e: ICreditCard) => {
    setSelectedCreditCard(e);
  };

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCreditCards());
  }, [dispatch, token]);

  return (
    <ProtectedRoute>
      <main className="flex flex-col max-w-5xl m-auto min-h-screen ">
        <div className="border-b border-pirates-red-strong w-full">
          <h1 className="font-imfell text-pirates-red-strong text-center mx-3 my-1 p-1 rounded">
            Carrinho de compras
          </h1>
        </div>

        {cartList && cartList.length > 0 ? (
          <div className="flex flex-col md:flex-row m-3">
            <div className="w-full ">
              {cartList &&
                cartList.map((product: IProduct) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              {/* //================================================================ ENDEREÇO */}
              <div className="w-full bg-pirates-container-dark p-3 mb-1 rounded">
                <h6 className="border-b mb-1 font-bold">Endereço:</h6>
                {getAdressList && getAdressList.length === 0 ? (
                  <>
                    <span className="text-pirates-red-strong p-1 rounded">
                      Nenhum endereço cadastrado!
                    </span>
                    <Link className="" href={"/profile/address"}>
                      <Button>Criar novo endereço</Button>
                    </Link>
                  </>
                ) : (
                  <Link href={"/profile/address"}>
                    <Button>Gerenciar endereços</Button>
                  </Link>
                )}
                {getAdressList &&
                  getAdressList.map((address: IAddress) => (
                    <AddressCheckbox
                      handleSelectAddress={handleSelectAddress}
                      selectedAddress={selectedAddress}
                      address={address}
                      key={address.id}
                    ></AddressCheckbox>
                  ))}
              </div>

              {/* //================================================================ METODO DE PAGAMENTO */}
              <div className="w-full bg-pirates-container-dark p-3 mb-1 rounded">
                <h6 className="border-b mb-1 font-bold">
                  Método de pagamento:
                </h6>
                {getAdressList && getAdressList.length === 0 ? (
                  <>
                    <span className="text-pirates-red-strong p-1 rounded">
                      Nenhum cartão de crédito cadastrado!
                    </span>
                    <Link href={"/profile/creditCards"}>
                      <Button>Cadastrar cartão de crédito</Button>
                    </Link>
                  </>
                ) : (
                  <Link href={"/profile/creditCards"}>
                    <Button>Gerenciar cartões de crédito</Button>
                  </Link>
                )}

                {getcreditCardsList &&
                  getcreditCardsList.map((creditCard: ICreditCard) => (
                    <CreditCardCheckbox
                      creditCard={creditCard}
                      handleSelectCard={handleSelectCard}
                      selectedCreditCard={selectedCreditCard}
                      key={creditCard.id}
                    />
                  ))}
              </div>

              {/* //================================================================ CHECKOUT */}
              <div className="">
                <div className="bg-pirates-container-dark p-4 rounded">
                  <h6>TOTAL:</h6>
                  <p className="text-black font-bold text-2xl">
                    {formatReal(totalValue)}{" "}
                  </p>

                  {<span className="text-pirates-red-strong">{error}</span>}
                  <Button onClick={handleCheckout}>Finalizar compra</Button>

                  <Link href={"/profile/purchases"}>
                    <Button>Ver histórico de compras</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center m-10">
            <span className="pb-4 font-bold text-lg text-black">
              Carrinho vazio, deseja comprar algo?
            </span>
            <Link href={"/shop"}>
              <Button>Ver catálogo de produtos</Button>
            </Link>
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
