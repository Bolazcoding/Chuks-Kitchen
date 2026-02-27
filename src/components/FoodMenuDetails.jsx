import FoodFullDetails from "./FoodFullDetails";
import Image from "./Image";

function FoodMenuDetails() {
  return (
    <section className="flex justify-between bg-soft-gray max-[700px]:flex-col">
      <div className="relative w-full max-[700px]:hidden">
        <Image
          src="./images/foodImage.png"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div>
        <Image
          src="/images/mobileJollof.png"
          alt="mobile-jollof"
          className="w-full object-cover min-[700px]:hidden"
        />
      </div>
      <FoodFullDetails />
    </section>
  );
}

export default FoodMenuDetails;
