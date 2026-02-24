import { popularMeals } from "../data/popularMeals";
import HeaderText from "./HeaderText";
import PopularMenuCat from "./popularMenuCat";

function PopularMenuMeal() {
  return (
    <section className="maxWidth mt-30">
      <HeaderText>Popular</HeaderText>
      <PopularMenuCat popularMeals={popularMeals} />
    </section>
  );
}

export default PopularMenuMeal;
