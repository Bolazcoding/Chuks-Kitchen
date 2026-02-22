import { specials } from "../data/chefSpecials";
import SpecialMeals from "./SpecialMeals";

function ChefSpecial() {
  return (
    <section className="maxWidth mt-30">
      <h2 className="text-[32px] text-text-color leading-10.5 font-bold text-center">
        Chef's Specials
      </h2>
      <SpecialMeals specials={specials} />
    </section>
  );
}

export default ChefSpecial;
