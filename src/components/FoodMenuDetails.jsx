import FoodFullDetails from "./FoodFullDetails";
import Image from "./Image";

function FoodMenuDetails() {
  return (
    <section className="flex bg-soft-gray">
      <Image src="./images/foodImage.png" />
      <FoodFullDetails />
    </section>
  );
}

export default FoodMenuDetails;
