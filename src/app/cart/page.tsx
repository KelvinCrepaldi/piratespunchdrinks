"use client";
import { ActionBtn } from "@/components/_ui/ActionBtn";
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
import { ProductCard } from "@/components/cart/ProductCard";
import { AddressCheckbox } from "@/components/cart/AddressCheckbox";
import { CreditCardCheckbox } from "@/components/cart/CreditCardCheckbox/CreditCardCheckbox";
import { Button } from "@/components/_ui/Button/Button";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";

export default function Cart(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const cartList = useSelector((state: any) => state.cart.cartList);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );
  const { error, isCheckoutSuccessful } = useSelector(
    (state: RootState) => state.orders
  );
  const [selectedAddress, setSelectAddress] = useState<IAddress | false>(false);
  const [selectedCreditCard, setSelectedCreditCard] = useState<
    ICreditCard | false
  >(false);

  const handleCheckout = () => {
    const data = {
      products: cartList,
      address: selectedAddress,
      creditCard: selectedCreditCard,
    };
    dispatch(createOrder({ ...data }));
  };

  const handleSelectAddress = (e: IAddress) => {
    setSelectAddress(e);
  };

  const handleSelectCard = (e: ICreditCard) => {
    setSelectedCreditCard(e);
  };
  useEffect(() => {
    if (isCheckoutSuccessful) {
      router.push("/cart/checkout");
    }
  }, [isCheckoutSuccessful, router]);

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCreditCards());
  }, [dispatch, token]);

  return (
    <ProtectedRoute>
      <main className="flex flex-col max-w-5xl m-auto min-h-screen">
        <div className="border-b border-pirates-red w-full">
          <h1 className="font-fredericka text-center mx-3 my-1 p-1 rounded">
            Carrinho de compras
          </h1>
        </div>

        {cartList.length > 0 ? (
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
                <h3 className="border-b mb-1 font-bold">Endereço:</h3>
                {getAdressList.length === 0 ? (
                  <>
                    <span className="text-pirates-red p-1 rounded">
                      Nenhum endereço cadastrado!
                    </span>
                    <Link className="" href={"/profile?option=addresses"}>
                      <Button>Criar novo endereço</Button>
                    </Link>
                  </>
                ) : (
                  <Link href={"/profile?option=addresses"}>
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
                <h3 className="border-b mb-1 font-bold">
                  Método de pagamento:
                </h3>
                {getAdressList.length === 0 ? (
                  <>
                    <span className="text-pirates-red p-1 rounded">
                      Nenhum cartão de crédito cadastrado!
                    </span>
                    <Link href={"/profile?option=creditcards"}>
                      <Button>Cadastrar cartão de crédito</Button>
                    </Link>
                  </>
                ) : (
                  <Link href={"/profile?option=creditcards"}>
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
                  <h3>TOTAL:</h3>
                  <p> R$: XXX.XX </p>

                  {error ?? <div>{error}</div>}
                  <Button onClick={handleCheckout}>Finalizar compra</Button>

                  <Link href={"/profile?option=orders"}>
                    <Button>Ver histórico de compras</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center m-10">
            <span className="pb-4 font-bold text-lg">
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