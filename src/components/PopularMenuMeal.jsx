import { popularMeals } from "../data/popularMeals";
import PopularMenuCat from "./popularMenuCat";

function PopularMenuMeal() {
  return (
    <section className="maxWidth mt-30">
      <h2 className="text-[32px] text-text-color leading-10.5 font-bold">
        Popular Categories
      </h2>
      <PopularMenuCat popularMeals={popularMeals} />
    </section>
  );
}

export default PopularMenuMeal;
