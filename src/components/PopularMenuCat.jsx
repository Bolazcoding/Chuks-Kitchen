import Image from "./Image";
import Button from "./Button";

function PopularMenuCat({ popularMeals }) {
  return (
    <div className="grid grid-cols-3 gap-12 w-fit mt-12">
      {popularMeals.map((popularMeal) => (
        <div
          key={popularMeal.id}
          className="bg-white rounded-2xl shadow-sm object-cover"
        >
          <Image src={popularMeal.image} alt={popularMeal.title} />
          <div className="py-7 px-4">
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
                textColor="text-white"
                className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold"
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

export default PopularMenuCat;
