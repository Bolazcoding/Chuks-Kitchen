import { jollofRiceMeals } from "../data/jollofRiceType";
import JollofMealCat from "./JollofMealCat";
import HeaderText from "./HeaderText";

function JollofMenuMeal() {
  return (
    <section className="maxWidth mt-10">
      <HeaderText>Jollof Rice & Entrees</HeaderText>
      <JollofMealCat jollofRiceMeals={jollofRiceMeals} />
    </section>
  );
}

export default JollofMenuMeal;
