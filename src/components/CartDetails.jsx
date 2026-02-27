import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { add } from "ionicons/icons";
import { remove } from "ionicons/icons";

function CartDetails({ carts }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-12">
      {carts.map((cart) => (
        <div
          key={cart.id}
          className="flex border-[0.5px] border-icon-text/30 rounded-[5px] object-cover"
        >
          <div className="flex items-center gap-4 justify-between py-3 px-6 w-full max-[450px]:px-3">
            <Image
              src={cart.image}
              alt={cart.title}
              className="w-47.5 h-43.5 rounded-[5px] max-[630px]:w-[108.14px] max-[630px]:h-full"
            />
            <div className="flex justify-between w-full max-[950px]:flex-col">
              <div>
                <h3 className=" text-text-color text-[32px] font-bold leading-10.5 max-[1100px]:text-[24px] max-[630px]:text-[16px] max-[630px]:leading-6">
                  {cart.title}
                </h3>
                <p className="text-text-color text-[24px] leading-8.5 font-medium mt-2.5 max-[1100px]:text-[16px] max-[950px]:mt-1 max-[630px]:text-[12px] max-[630px]:leading-6">
                  {cart.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-8 ">
                <Button
                  bgColor="bg-icon-text/40"
                  className="rounded-sm px-1.5 py-1.25 flex items-center justify-center cursor-pointer"
                >
                  <IonIcon
                    icon={add}
                    className="text-white text-xl max-[1100px]:text-lg max-[630px]:text-[12px]"
                  />
                </Button>
                <span className="text-text-color text-[51.53px] font-medium leading-18.25 max-[1100px]:text-4xl max-[630px]:text-[20.74px] max-[630px]:leading-[29.38px]">
                  1
                </span>
                <Button
                  bgColor="bg-icon-text/40"
                  className="rounded-sm px-1.5 py-1.25 flex items-center justify-center cursor-pointer"
                >
                  <IonIcon
                    icon={remove}
                    className="text-white text-xl max-[1100px]:text-lg max-[630px]:text-[12px]"
                  />
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-between max-[650px]:mt-1.5 ">
                <p className="text-primary-color text-[32px] leading-10.5 font-bold max-[1100px]:text-[24px] max-[630px]:text-[16px] max-[630px]:leading-6">
                  {cart.price}
                </p>
                <Button
                  bgColor="bg-primary-color"
                  className="rounded-sm px-1.5 py-1.25  flex items-center justify-center cursor-pointer"
                >
                  <IonIcon
                    icon={close}
                    className="text-white text-xl max-[1100px]:text-lg max-[630px]:text-[12px]"
                  />
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
