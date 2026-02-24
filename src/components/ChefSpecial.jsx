import { specials } from "../data/chefSpecials";
import HeaderText from "./HeaderText";
import SpecialMeals from "./SpecialMeals";

function ChefSpecial() {
  return (
    <section className="maxWidth mt-30">
      <HeaderText className="text-center">Chef's Specials</HeaderText>
      <SpecialMeals specials={specials} />
    </section>
  );
}

export default ChefSpecial;
