import { swallowMeals } from "../data/swallowMealType";
import SwallowMealCat from "./swallowMealCat";

function SwallowMenuMeal() {
  return (
    <section className="maxWidth mt-10 mb-20">
      <h2 className="text-[32px] text-text-color leading-10.5 font-bold">
        Swallow & Soups
      </h2>
      <SwallowMealCat swallowMeals={swallowMeals} />
    </section>
  );
}

export default SwallowMenuMeal;
