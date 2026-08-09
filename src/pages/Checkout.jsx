import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "./Main";
import HeaderText from "../components/HeaderText";
import CartSummary from "../components/CartSummary";
import CartDetails from "../components/CartDetails";
import { useKitchen } from "../contexts/useKitchen";
import Button from "../components/Button";

function Checkout({ setLoggedIn }) {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useKitchen();

  const handleConfirmOrder = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="bg-soft-gray min-h-screen">
      <Header setLoggedIn={setLoggedIn} />
      <Main>
        <section className="maxWidth mx-auto max-w-6xl bg-white border-[0.5px] border-icon-text/30 rounded-[10px] px-6 py-8 my-25 max-[950px]:px-4 max-[630px]:px-3 max-[630px]:py-6 max-[630px]:my-12">
          <HeaderText className="mb-4">Checkout</HeaderText>
          {cartItems.length === 0 ? (
            <div className="text-text-color text-[18px] leading-7 font-medium">
              Your cart is empty. Add items before checking out.
            </div>
          ) : (
            <>
              <div className="mb-8">
                <CartDetails carts={cartItems} />
              </div>
              <CartSummary cartItems={cartItems}>
                <Button
                  onClick={handleConfirmOrder}
                  bgColor="bg-primary-color"
                  textColor="text-white"
                  className="w-full rounded-lg py-3 text-[16px] font-semibold hover:bg-soft-orange"
                >
                  Confirm Order
                </Button>
              </CartSummary>
            </>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default Checkout;
