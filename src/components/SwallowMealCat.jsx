import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function SwallowMealCat({ swallowMeals }) {
  return (
    <div className="grid grid-cols-3 gap-12 w-full mt-8 max-[950px]:grid-cols-2 max-[950px]:justify-between max-[600px]:grid-cols-1 max-[600px]:px-2 max-[600px]:gap-8">
      {swallowMeals.map((swallowMeal) => (
        <div
          key={swallowMeal.id}
          className="bg-white rounded-2xl shadow-sm object-cover max-[600px]:flex max-[600px]:rounded-lg"
        >
          <Image
            src={swallowMeal.image}
            alt={swallowMeal.title}
            className="w-full h-55.5 rounded-t-2xl max-[600px]:h-full max-[600px]:w-32 max-[600px]:rounded-xl max-[600px]:px-2 max-[600px]:py-2"
          />
          <div className="py-7 px-4 w-full max-[600px]:px-2 max-[600px]:py-2">
            <div className="pr-0">
              <h3 className=" text-text-color text-2xl font-semibold leading-8.5 max-[600px]:text-[16px] max-[600px]:leading-6">
                {swallowMeal.title}
              </h3>
              <p className="text-text-color text-[16px] leading-6 font-medium mt-2.5 max-[600px]:mt-1 max-[600px]:text-[12px] max-[600px]:leading-4">
                {swallowMeal.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-10 max-[600px]:pt-2">
              <p className="text-primary-color text-[16px] leading-6 font-medium">
                {swallowMeal.price}
              </p>
              <Button
                bgColor="bg-primary-color"
                className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer max-[600px]:w-5 max-[600px]:h-5"
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

export default SwallowMealCat;
