import PopularCatMeal from "./PopularCatMeal";
import { meals } from "../data/popularCateMeal";

function PopularCategories() {
  return (
    <section className="maxWidth mt-30">
      <h2 className="text-[32px] text-text-color leading-10.5 font-bold text-center">
        Popular Categories
      </h2>
      <PopularCatMeal meals={meals} />
    </section>
  );
}

export default PopularCategories;
