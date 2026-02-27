import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

function PopularMenuCat({ popularMeals }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-12 w-full mt-12 max-[950px]:grid-cols-2 max-[950px]:justify-between max-[600px]:grid-cols-1 max-[600px]:px-2 max-[600px]:gap-8">
      {popularMeals.map((popularMeal) => (
        <div
          key={popularMeal.id}
          className="bg-white rounded-2xl shadow-sm max-[600px]:flex max-[600px]:rounded-lg"
        >
          <Button onClick={() => navigate("/foodDetails")}>
            <Image
              src={popularMeal.image}
              alt={popularMeal.title}
              className="w-full h-55.5 object-cover rounded-t-2xl max-[600px]:h-full max-[600px]:w-32 max-[600px]:rounded-xl max-[600px]:px-2 max-[600px]:py-2 cursor-pointer"
            />
          </Button>
          <div className="py-7 px-4 w-full max-[600px]:px-2 max-[600px]:py-2">
            <div>
              <h3
                className=" text-text-color text-2xl font-semibold leading-8.5 max-[600px]:text-[16px] max-[600px]:leading-6 cursor-pointer hover:text-primary-color"
                onClick={() => navigate("/foodDetails")}
              >
                {popularMeal.title}
              </h3>
              <p className="text-text-color text-[16px] leading-6 font-medium mt-2.5 max-[600px]:mt-1 max-[600px]:text-[12px] max-[600px]:leading-4">
                {popularMeal.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-10 max-[600px]:pt-2">
              <p className="text-primary-color text-[16px] leading-6 font-medium">
                {popularMeal.price}
              </p>
              <Button
                onClick={() => navigate("/cart")}
                bgColor="bg-primary-color"
                className="rounded-full w-8 h-8 flex items-center justify-center max-[600px]:w-5 max-[600px]:h-5"
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
