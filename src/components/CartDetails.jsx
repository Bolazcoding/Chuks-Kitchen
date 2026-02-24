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
          <div className="flex items-center justify-between py-3 px-6 w-full">
            <Image
              src={cart.image}
              alt={cart.title}
              className="w-47.5 h-43.5"
            />
            <div>
              <h3 className=" text-text-color text-[32px] font-bold leading-10.5 ">
                {cart.title}
              </h3>
              <p className="text-text-color text-[24px] leading-8.5 font-medium mt-2.5">
                {cart.description}
              </p>
            </div>

            <div className="flex items-center gap-16">
              <Button
                bgColor="bg-icon-text/40"
                className="rounded-sm px-1.5 py-1.25 flex items-center justify-center cursor-pointer"
              >
                <IonIcon icon={add} className="text-white text-2xl " />
              </Button>
              <span className="text-text-color text-[51.53px] font-medium leading-18.25">
                1
              </span>
              <Button
                bgColor="bg-icon-text/40"
                className="rounded-sm px-1.5 py-1.25 flex items-center justify-center cursor-pointer"
              >
                <IonIcon icon={remove} className="text-white text-2xl " />
              </Button>
            </div>

            <p className="text-primary-color text-[32px] leading-10.5 font-bold">
              {cart.price}
            </p>
            <Button
              bgColor="bg-primary-color"
              className="rounded-sm px-1.5 py-1.25  flex items-center justify-center cursor-pointer"
            >
              <IonIcon icon={close} className="text-white text-2xl " />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartDetails;
