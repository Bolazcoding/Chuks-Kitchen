import CartMenu from "../components/CartMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "./Main";

function Cart({ setLoggedIn }) {
  return (
    <div className="bg-soft-gray">
      <Header setLoggedIn={setLoggedIn} />
      <Main>
        <CartMenu />
        <Footer />
      </Main>
    </div>
  );
}

export default Cart;
