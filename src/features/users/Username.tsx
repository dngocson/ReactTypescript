import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store.js/store";
export const Username = () => {
  let username = useSelector((state: RootState) => state.user.username);
  if (!username) username = "Unknow User";
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};
