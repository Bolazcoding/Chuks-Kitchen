import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "./Main";

function HomePage() {
  return (
    <div>
      <Header />
      <Main>
        <Hero />
      </Main>
    </div>
  );
}

export default HomePage;
