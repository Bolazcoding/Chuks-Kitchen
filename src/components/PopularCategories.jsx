import PopularCatMeal from "./PopularCatMeal";
import { meals } from "../data/popularCateMeal";
import HeaderText from "./HeaderText";

function PopularCategories() {
  return (
    <section className="maxWidth mt-30">
      <HeaderText className="text-center">Popular Categories</HeaderText>
      <PopularCatMeal meals={meals} />
    </section>
  );
}

export default PopularCategories;
