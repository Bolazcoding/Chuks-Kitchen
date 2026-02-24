import Footer from "../components/Footer";
import Header from "../components/Header";
import JollofMenuMeal from "../components/JollofMenuMeal";
import MenuHero from "../components/MenuHero";
import PopularMenuMeal from "../components/popularMenuMeal";
import SwallowMenuMeal from "../components/swallowMenuMeal";
import Main from "./Main";

function MenuPage() {
  return (
    <div className="bg-soft-gray">
      <Header />
      <Main>
        <MenuHero />
        <PopularMenuMeal />
        <JollofMenuMeal />
        <SwallowMenuMeal />
        <Footer />
      </Main>
    </div>
  );
}

export default MenuPage;
