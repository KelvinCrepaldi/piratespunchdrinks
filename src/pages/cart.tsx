import ActionBtn from "@/components/ActionBtn";
import ProtectedRoute from "@/components/ProtectedRoute";
import QuantityControlButton from "@/components/QuantityControlButton";
import { IAddress } from "@/interfaces/address.interface";
import { ICreditCard } from "@/interfaces/creditCards.interface";
import { IProduct } from "@/interfaces/product.interface";
import { fetchAddresses } from "@/store/actions/addresses";
import { fetchCreditCards } from "@/store/actions/creditCards";
import { createOrder } from "@/store/actions/orders";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const cartList = useSelector((state: any) => state.cart.cartList);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );
  const [selectedAddress, setSelectAddress] = useState<IAddress | false>(false);
  const [selectedCreditCard, setSelectedCreditCard] = useState<
    ICreditCard | false
  >(false);

  const handleCheckout = () => {
    const data = {
      token,
      products: cartList,
      address: selectedAddress,
      creditCard: selectedCreditCard,
    };
    dispatch(createOrder(data));
  };

  const handleSelectAddress = (e: IAddress) => {
    setSelectAddress(e);
  };

  const handleSelectCard = (e: ICreditCard) => {
    setSelectedCreditCard(e);
  };

  useEffect(() => {
    dispatch(fetchAddresses(token));
    dispatch(fetchCreditCards(token));
  }, [dispatch, token]);

  return (
    <ProtectedRoute>
      <main className="flex flex-col max-w-5xl m-auto min-h-screen ">
        <div className="border-b border-pirates-red w-full">
          <h1 className="font-fredericka">Cart</h1>
        </div>

        {cartList.length > 0 ? (
          <div className="flex ">
            <div className="w-full ">
              {cartList.map((product: IProduct) => (
                <div
                  className="flex m-3 p-4 bg-pirates-black-hover justify-between"
                  key={product.id}
                >
                  <div className="flex">
                    <div>
                      <h3 className="text-center">Item</h3>
                      <Image
                        src={product.img_url}
                        width={100}
                        height={100}
                        alt="product representation image"
                      />
                    </div>
                    <div>
                      <div className="ml-5">
                        <ul className="flex flex-col m-3">
                          <li className="text-xl text-pirates-gold">
                            {product.name}
                          </li>
                          <li className="text-pirates-red">{product.amount}</li>
                          <li>{product.category?.name}</li>
                          <li>{product.price}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-center">Quantity</h3>
                    <QuantityControlButton
                      product={product}
                    ></QuantityControlButton>
                    <span>total: xxx</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-96">
              <h3>Address:</h3>
              <Link href={"/user?option=addresses"}>Go to your Addresses</Link>
              {getAdressList.map((address: IAddress) => (
                <label key={address.id} className="">
                  <div
                    className={`flex  bg-pirates-black-hover p-3 mt-1 border-l ${
                      selectedAddress && selectedAddress.id === address.id
                        ? "border-green-400"
                        : "border-transparent"
                    }`}
                  >
                    <input
                      className="mr-4 accent-green-600 bg-black text-red-500"
                      type="checkbox"
                      checked={
                        selectedAddress && selectedAddress.id === address.id
                          ? true
                          : false
                      }
                      onChange={() => handleSelectAddress(address)}
                    />
                    <ul>
                      <li className="space-x-5">
                        <span>
                          <span className="text-pirates-gold">Address: </span>
                          {address.address},<span>{address.number}</span>
                        </span>

                        <span>
                          <span className="text-pirates-gold">
                            Complement:{" "}
                          </span>
                          {address.complement}
                        </span>
                      </li>
                      <li className="flex space-x-5">
                        <span>
                          <span className="text-pirates-gold">Country: </span>
                          {address.country}
                        </span>
                        <span>
                          <span className="text-pirates-gold">City: </span>
                          {address.city}
                        </span>
                        <span>
                          <span className="text-pirates-gold">State: </span>
                          {address.state}
                        </span>
                      </li>
                      <div>
                        <span>
                          <span className="text-pirates-gold">CEP: </span>
                          {address.cep}
                        </span>
                      </div>
                    </ul>
                  </div>
                </label>
              ))}
              <h3>Payment method:</h3>
              <Link href={"/user?option=creditcards"}>
                Go to your credit cards
              </Link>
              {getcreditCardsList.map((creditCard: ICreditCard) => (
                <label
                  key={creditCard.id}
                  className={`flex bg-pirates-black-hover p-4 mt-4 border-l ${
                    selectedCreditCard &&
                    selectedCreditCard.id === creditCard.id
                      ? "border-green-400"
                      : "border-transparent"
                  }`}
                >
                  <input
                    className="mr-4 accent-green-600"
                    type="checkbox"
                    onChange={() => handleSelectCard(creditCard)}
                    checked={
                      selectedCreditCard &&
                      selectedCreditCard.id === creditCard.id
                        ? true
                        : false
                    }
                  />
                  <ul>
                    <div>
                      <span className="text-pirates-gold">Name: </span>
                      <span>{creditCard.name}</span>
                    </div>
                    <div className="flex space-x-5">
                      <span>
                        <span className="text-pirates-gold">Number: </span>{" "}
                        {creditCard.number}
                      </span>
                      <span>
                        <span className="text-pirates-gold">Expiration: </span>{" "}
                        {creditCard.expiration_date}
                      </span>
                    </div>
                  </ul>
                </label>
              ))}
              <div className="bg-pirates-black-hover p-4 mt-5">
                {" "}
                <h3>TOTAL:</h3>
                <p> R$: XXX.XX </p>
              </div>
              <button onClick={handleCheckout}>Checkout</button>
              <Link href={"/user?option=orders"}>Go to Purchases History</Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center m-20">
            <p className="pb-4">Carrinho vazio, deseja comprar algo?</p>
            <Link href={"shop"}>
              <ActionBtn>Ir para a loja</ActionBtn>
            </Link>
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
