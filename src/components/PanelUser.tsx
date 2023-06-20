import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PanelUser() {
  const [user, setUser] = useState<any>(null);
  const getUser = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(getUser);
  }, [getUser]);

  return (
    <div className="font-inter">
      <div>
        <h1 className="border-b font-inter">User</h1>
        <ul className="">
          <li className="flex justify-between">
            <span>Name: {user?.name}</span>
            <button>change</button>
          </li>
          <li className="flex justify-between">
            <span>Email: {user?.email}</span>
            <button>change</button>
          </li>
          <li className="flex justify-between">
            <span>Password: ******...</span>
            <button>change</button>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="border-b font-inter">Address</h1>
        <div className=" bg-slate-500">
          <p>{user?.address?.address}</p>
        </div>
      </div>
      <div>
        <h1 className="border-b font-inter">Credit Cards</h1>
        <div className=" bg-slate-500">
          <p>{user?.credit_card}</p>
        </div>
      </div>
    </div>
  );
}
