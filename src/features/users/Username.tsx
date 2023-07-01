import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store/store";
export const Username = () => {
  const username = useSelector((state: RootState) => state.user.username);
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};
