import { useNavigate } from "react-router-dom";
import HeaderText from "./HeaderText";
import CartDetails from "./CartDetails";
import CartSummary from "./CartSummary";
import Button from "./Button";
import { useKitchen } from "../contexts/useKitchen";

function CartMenu() {
  const navigate = useNavigate();
  const { cartItems } = useKitchen();

  return (
    <section className="maxWidth mx-auto max-w-6xl bg-white border-[0.5px] border-icon-text/30 rounded-[10px] px-6 py-8 my-25 max-[950px]:px-4 max-[630px]:px-3 max-[630px]:py-6 max-[630px]:my-12">
      <HeaderText className="mb-4">Your Cart</HeaderText>
      {cartItems.length === 0 ? (
        <p className="text-text-color text-[18px] leading-7 font-medium mt-6">
          Your cart is empty. Add a meal to get started.
        </p>
      ) : (
        <>
          <CartDetails carts={cartItems} />
          <CartSummary cartItems={cartItems}>
            <Button
              onClick={() => navigate("/checkout")}
              bgColor="bg-primary-color"
              textColor="text-white"
              className="w-full rounded-lg py-3 text-[16px] font-semibold hover:bg-soft-orange"
            >
              Proceed to checkout
            </Button>
          </CartSummary>
        </>
      )}
    </section>
  );
}

export default CartMenu;
