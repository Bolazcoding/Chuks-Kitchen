import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "./Main";
import PopularCategories from "./PopularCategories";

function HomePage() {
  return (
    <div className="bg-soft-gray">
      <Header />
      <Main>
        <Hero />
        <PopularCategories />
        <Footer />
      </Main>
    </div>
  );
}

export default HomePage;
