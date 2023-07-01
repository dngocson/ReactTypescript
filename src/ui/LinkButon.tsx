import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface LinkButtonProps {
  children: React.ReactNode;
  to?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to = "/" }) => {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Go back
      </button>
    );
  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
