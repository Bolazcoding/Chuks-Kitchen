import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuHero from "../components/MenuHero";
import PopularMenuMeal from "../components/popularMenuMeal";
import Main from "./Main";

function MenuPage() {
  return (
    <div>
      <Header />
      <Main>
        <MenuHero />
        <PopularMenuMeal />
        <Footer />
      </Main>
    </div>
  );
}

export default MenuPage;
