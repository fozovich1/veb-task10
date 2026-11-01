import React from "react";
import { useGlobalContext } from "./context";
import { FaShoppingCart } from "react-icons/fa"; // Используем стандартную иконку

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3>UseReducer</h3>
        <div className="nav-container">
          <FaShoppingCart style={{ fontSize: "1.5rem" }} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;