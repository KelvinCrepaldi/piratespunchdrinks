"use client";
import { Button } from "@/components/_ui/Button/Button";
import { deleteAccount } from "@/store/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Address() {
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };
  return (
    <section>
      <p className="text-red-700">
        Ao desativar a conta, ela não será excluida, porem só é possivel
        recuperar com um administrador.
      </p>
      <div className="max-w-[200px]">
        <Button onClick={handleDeleteAccount}>Desativar conta!</Button>
      </div>
    </section>
  );
}
