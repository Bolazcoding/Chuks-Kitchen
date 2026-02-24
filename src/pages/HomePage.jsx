import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ChefSpecial from "../components/ChefSpecial";
import Main from "./Main";
import PopularCategories from "../components/PopularCategories";
import NewMenu from "../components/NewMenu";
import Search from "../components/Search";

function HomePage() {
  return (
    <div className="bg-soft-gray">
      <Header />
      <Main>
        <Hero />
        <Search />
        <PopularCategories />
        <ChefSpecial />
        <NewMenu />
        <Footer />
      </Main>
    </div>
  );
}

export default HomePage;
