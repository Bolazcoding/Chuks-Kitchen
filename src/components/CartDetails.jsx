import { useKitchen } from "../contexts/useKitchen";
import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { add } from "ionicons/icons";
import { remove } from "ionicons/icons";

function CartDetails({ carts }) {
  const { updateQuantity, removeFromCart } = useKitchen();

  return (
    <div className="grid gap-6 mt-8">
      {carts.map((cart) => (
        <div
          key={cart.id}
          className="grid grid-cols-[auto_1fr] gap-6 border-[0.5px] border-icon-text/30 rounded-[10px] p-6 max-[950px]:grid-cols-1 max-[950px]:p-4"
        >
          <Image
            src={cart.image}
            alt={cart.title}
            className="w-48 h-44 rounded-[10px] object-cover max-[630px]:w-full max-[630px]:h-56"
          />

          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-text-color text-[32px] font-bold leading-10.5 max-[1100px]:text-[24px] max-[630px]:text-[20px] max-[630px]:leading-7">
                {cart.title}
              </h3>
              <p className="text-text-color text-[18px] leading-7 font-medium mt-3 max-[1100px]:text-[16px] max-[630px]:text-[14px]">
                {cart.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => updateQuantity(cart.id, 1)}
                  bgColor="bg-icon-text/40"
                  className="rounded-sm px-3 py-2 flex items-center justify-center cursor-pointer"
                >
                  <IonIcon icon={add} className="text-white text-xl" />
                </Button>
                <span className="text-text-color text-[34px] font-medium leading-10 max-[630px]:text-[24px]">
                  {cart.quantity || 1}
                </span>
                <Button
                  onClick={() => updateQuantity(cart.id, -1)}
                  bgColor="bg-icon-text/40"
                  className="rounded-sm px-3 py-2 flex items-center justify-center cursor-pointer"
                >
                  <IonIcon icon={remove} className="text-white text-xl" />
                </Button>
              </div>

              <div className="flex items-center gap-4 justify-between">
                <p className="text-primary-color text-[28px] leading-8 font-bold max-[950px]:text-[24px] max-[630px]:text-[20px]">
                  {cart.price}
                </p>
                <Button
                  onClick={() => removeFromCart(cart.id)}
                  bgColor="bg-primary-color"
                  className="rounded-sm px-3 py-2 flex items-center justify-center cursor-pointer"
                >
                  <IonIcon icon={close} className="text-white text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartDetails;
