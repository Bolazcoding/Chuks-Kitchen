import PopularCatMeal from "../components/PopularCatMeal";
import { meals } from "../../data/popularCateMeal";

function PopularCategories() {
  return (
    <section className="maxWidth mt-30">
      <PopularCatMeal meals={meals} />
    </section>
  );
}

export default PopularCategories;
