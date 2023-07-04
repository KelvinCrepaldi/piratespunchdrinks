import ActionBtn from "@/components/ActionBtn";
import ProtectedRoute from "@/components/ProtectedRoute";
import QuantityControlButton from "@/components/QuantityControlButton";
import { IAddress } from "@/interfaces/address.interface";
import { IProduct } from "@/interfaces/product.interface";
import { fetchAddresses } from "@/store/actions/addresses";
import { fetchCreditCards } from "@/store/actions/creditCards";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const token = useSelector((state: any) => state.auth.token);
  const cartList = useSelector((state: any) => state.cart.cartList);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddresses(token));
    dispatch(fetchCreditCards(token));
  }, [dispatch, token]);

  return (
    <ProtectedRoute>
      <div className="flex flex-col max-w-5xl m-auto min-h-screen ">
        <div className="border-b border-pirates-red w-full">
          <h1 className="font-fredericka">Cart</h1>
        </div>
        <div className="flex">
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
          <div className="flex flex-col w-96 m-2">
            <h3>Address:</h3>
            {getAdressList.map((address: IAddress) => (
              <div key={address.id} className="bg-pirates-black-hover p-4 mt-4">
                <ul>
                  <li className="space-x-5">
                    <span>
                      <span className="text-pirates-gold">Address: </span>
                      {address.address},<span>{address.number}</span>
                    </span>

                    <span>
                      <span className="text-pirates-gold">Complement: </span>
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
            ))}
            <h3>Payment method:</h3>
            {getcreditCardsList.map((card: any) => (
              <div key={card.id} className="bg-pirates-black-hover p-4">
                <ul>
                  <div>
                    <span className="text-pirates-gold">Name: </span>
                    <span>{card.name}</span>
                  </div>
                  <div className="flex space-x-5">
                    <span>
                      <span className="text-pirates-gold">Number: </span>{" "}
                      {card.number}
                    </span>
                    <span>
                      <span className="text-pirates-gold">Expiration: </span>{" "}
                      {card.expiration_date}
                    </span>
                  </div>
                </ul>
              </div>
            ))}
            <div className="bg-pirates-black-hover p-4 mt-5">
              {" "}
              <h3>TOTAL:</h3>
              <p> R$: XXX.XX </p>
            </div>
            <ActionBtn>Checkout</ActionBtn>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
