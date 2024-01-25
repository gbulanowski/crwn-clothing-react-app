import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CardContext } from "../../context/card.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);

  const toggleIsCardOpen = () => {
    setIsCardOpen(!isCardOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
