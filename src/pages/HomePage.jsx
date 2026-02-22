import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ChefSpecial from "../components/ChefSpecial";
import Main from "./Main";
import PopularCategories from "../components/PopularCategories";
import NewMenu from "../components/NewMenu";

function HomePage() {
  return (
    <div className="bg-soft-gray">
      <Header />
      <Main>
        <Hero />
        <PopularCategories />
        <ChefSpecial />
        <NewMenu />
        <Footer />
      </Main>
    </div>
  );
}

export default HomePage;
