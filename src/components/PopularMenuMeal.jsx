import { popularMeals } from "../data/popularMeals";
import HeaderText from "./HeaderText";
import PopularMenuCat from "./PopularMenuCat";

function PopularMenuMeal() {
  return (
    <section className="maxWidth mt-20">
      <HeaderText>Popular</HeaderText>
      <PopularMenuCat popularMeals={popularMeals} />
    </section>
  );
}

export default PopularMenuMeal;
