import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "./Main";
import Button from "../components/Button";

function Success({ setLoggedIn }) {
  const navigate = useNavigate();

  return (
    <div className="bg-soft-gray min-h-screen">
      <Header setLoggedIn={setLoggedIn} />
      <Main>
        <section className="maxWidth mx-auto max-w-3xl bg-white border-[0.5px] border-icon-text/30 rounded-[10px] px-6 py-12 my-25 text-center max-[630px]:px-4 max-[630px]:py-10 max-[630px]:my-12">
          <h1 className="text-text-color text-4xl font-bold mb-4">
            Order Confirmed
          </h1>
          <p className="text-text-color text-[18px] leading-8 mb-8">
            Thank you for your order! Your meal is being prepared and will be
            delivered soon.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={() => navigate("/home")}
              bgColor="bg-primary-color"
              textColor="text-white"
              className="rounded-lg px-8 py-3 font-semibold hover:bg-soft-orange"
            >
              Continue Shopping
            </Button>
            <Button
              onClick={() => navigate("/explore")}
              className="rounded-lg px-8 py-3 font-semibold border border-icon-text text-text-color hover:bg-slate-100"
            >
              Browse More
            </Button>
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default Success;
