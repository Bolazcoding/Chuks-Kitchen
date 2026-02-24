import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function PopularMenuCat({ popularMeals }) {
  return (
    <div className="grid grid-cols-3 gap-12 w-fit mt-12">
      {popularMeals.map((popularMeal) => (
        <div
          key={popularMeal.id}
          className="bg-white rounded-2xl shadow-sm object-cover"
        >
          <Image
            src={popularMeal.image}
            alt={popularMeal.title}
            className="h-55.5 rounded-t-2xl"
          />
          <div className="py-7 px-3.5">
            <div>
              <h3 className=" text-text-color text-2xl font-semibold leading-8.5 ">
                {popularMeal.title}
              </h3>
              <p className="text-text-color text-[16px] leading-6 font-medium mt-2.5">
                {popularMeal.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-10">
              <p className="text-primary-color text-[16px] leading-6 font-medium">
                {popularMeal.price}
              </p>
              <Button
                bgColor="bg-primary-color"
                className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <IonIcon icon={add} className="text-white text-3xl " />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularMenuCat;
