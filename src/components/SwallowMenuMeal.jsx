import { swallowMeals } from "../data/swallowMealType";
import HeaderText from "./HeaderText";
import SwallowMealCat from "./SwallowMealCat";

function SwallowMenuMeal() {
  return (
    <section className="maxWidth mt-10 mb-20">
      <HeaderText>Swallow & Soups</HeaderText>
      <SwallowMealCat swallowMeals={swallowMeals} />
    </section>
  );
}

export default SwallowMenuMeal;
