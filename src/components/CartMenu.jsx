import HeaderText from "./HeaderText";
import { carts } from "../data/cart";
import CartDetails from "./CartDetails";

function CartMenu() {
  return (
    <section className="maxWidth bg-white border-[0.5px] border-icon-text/30 rounded-[5px] px-3 py-6 my-25">
      <HeaderText>Your Cart</HeaderText>
      <CartDetails carts={carts} />
    </section>
  );
}

export default CartMenu;
