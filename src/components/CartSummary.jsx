import Button from "./Button";
import HeaderText from "./HeaderText";
import { formatPrice, parsePrice } from "../utils/price";

function CartSummary({ cartItems, children }) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
    0,
  );
  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = cartItems.length > 0 ? 500 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="mt-8 bg-white border-[0.5px] border-icon-text/20 rounded-[20px] p-6 shadow-sm max-[630px]:p-4">
      <HeaderText className="mb-4">Order Summary</HeaderText>
      <div className="space-y-3 text-text-color">
        <div className="flex items-center justify-between text-[16px] font-medium">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-[16px] font-medium">
          <span>Tax & fees</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex items-center justify-between text-[16px] font-medium">
          <span>Delivery fee</span>
          <span>{formatPrice(deliveryFee)}</span>
        </div>
        <div className="border-t border-icon-text/20 pt-4 flex items-center justify-between text-[22px] font-bold">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

export default CartSummary;
