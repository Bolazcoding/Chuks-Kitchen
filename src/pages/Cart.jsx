import CartMenu from "../components/CartMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "./Main";

function Cart() {
  return (
    <div className="bg-soft-gray">
      <Header />
      <Main>
        <CartMenu />
        <Footer />
      </Main>
    </div>
  );
}

export default Cart;
