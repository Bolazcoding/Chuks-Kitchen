import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";

function SpecialMeals({ specials }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-12 w-fit mt-12 max-[950px]:grid-cols-2 max-[950px]:justify-between max-[600px]:grid-cols-1">
      {specials.map((special) => (
        <div
          key={special.id}
          className="bg-white rounded-2xl shadow-sm object-cover "
        >
          <Button onClick={() => navigate("/foodDetails")}>
            <Image
              src={special.image}
              alt={special.title}
              className="rounded-t-2xl max-[600px]:w-full cursor-pointer"
            />
          </Button>
          <div className="py-7 px-4">
            <div>
              <h3
                className=" text-text-color text-2xl font-semibold leading-8.5 cursor-pointer hover:text-primary-color"
                onClick={() => navigate("/foodDetails")}
              >
                {special.title}
              </h3>
              <p className="text-text-color text-[16px] leading-6 font-medium mt-2.5">
                {special.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-10">
              <p className="text-primary-color text-[16px] leading-6 font-medium">
                {special.price}
              </p>
              <Button
                onClick={() => navigate("/cart")}
                bgColor="bg-primary-color"
                textColor="text-white"
                className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold max-[1150px]:px-8 max-[1150px]:py-2.75"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpecialMeals;
