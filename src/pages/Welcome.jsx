import Image from "../components/Image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import SignIn from "./SignIn";

function Welcome() {
  return (
    <>
      <div className="flex">
        <Logo />
        <div className="w-full pl-20 pr-15 pt-8">
          <div className="flex items-center justify-between">
            <h1 className="productStyle text-[40.81px] leading-[40.81px]">
              Chuks Kitchen
            </h1>
            <Button
              className="py-3.75 px-12 text-[16px] rounded-lg font-semibold"
              textColor="text-primary-blue"
              border="border-2"
              onClick={SignIn}
            >
              Sign In
            </Button>
          </div>
          <div className="mt-25">
            <h1 className="text-text-color font-bold text-[32px] leading-10">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="text-text-color font-medium text-[16px] leading-6 pt-4">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-6">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="./images/fork-knife-fill.png"
                  className="bg-light-orange p-2.5 rounded-lg"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Freshly Prepared
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Image
                  src="./images/fork-knife-fill.png"
                  className="bg-light-orange p-2.5 rounded-lg"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Support Local Business
                </p>
              </div>
              <div className="flex gap-2.75 items-center">
                <Image
                  src="./images/card-fill.png"
                  className="bg-light-orange p-2.5 rounded-lg"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Fast & Reliable Delivery
                </p>
              </div>
            </div>
            <Button
              className="w-full font-semibold text-[16px] py-4.75 rounded-lg mt-10"
              bgColor="bg-primary-color"
              textColor="text-white"
            >
              Start Your Order
            </Button>
            <Button
              className="w-full font-semibold text-[16px] py-4.75 rounded-lg mt-10"
              textColor="text-primary-blue"
              border="border-2"
            >
              Learn More About Us
            </Button>
          </div>

          <p className="text-text-color text-center mt-35 font-medium text-[15px]">
            &copy; 2024 Chuks Kitchen.
            <span className="text-soft-blue pl-4 text-[14px] font-medium leading-5">
              Privacy Policy
            </span>
            <span className="text-soft-blue pl-4 text-[14px] font-medium leading-5">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
