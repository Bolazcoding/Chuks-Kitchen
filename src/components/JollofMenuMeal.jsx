import JollofMealCat from "./jollofMealCat";
import { jollofRiceMeals } from "../data/jollofRiceType";

function JollofMenuMeal() {
  return (
    <section className="maxWidth mt-10">
      <h2 className="text-[32px] text-text-color leading-10.5 font-bold">
        Jollof Rice & Entrees
      </h2>
      <JollofMealCat jollofRiceMeals={jollofRiceMeals} />
    </section>
  );
}

export default JollofMenuMeal;
