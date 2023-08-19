"use client";
import { PanelAddresses } from "@/components/profile/PanelAddresses";
import { deleteAccount } from "@/store/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Address() {
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };
  return <>Delete account</>;
}
