import FoodMenuDetails from "../components/FoodMenuDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "./Main";

function FoodDetails() {
  return (
    <div>
      <Header />
      <Main>
        <FoodMenuDetails />
        <Footer />
      </Main>
    </div>
  );
}

export default FoodDetails;
