import Image from "../components/Image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  // const handleStart = ({ setIsOnboarded }) => {
  //   localStorage.setItem("onboardingComplete", "true");
  //   setIsOnboarded(true);
  //   navigate("/home");
  // };
  return (
    <>
      <div className="flex max-[700px]:flex-col">
        <div className="relative w-full max-[700px]:hidden">
          <Image
            src="/images/Rectangle-1.jpg"
            alt="welcome-img"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="w-full pl-20 pr-15 pt-8 max-[1000px]:pl-10 max-[1000px]:pr-8 max-[830px]:pl-6 max-[830px]:pr-6 max-[700px]:pl-7 max-[700px]:pr-7">
          <Image
            src="/images/mobileImageWelcome.png"
            alt="welcome-img"
            className=" w-full object-cover min-[700px]:hidden"
          />
          <div className="flex items-center justify-between max-[700px]:flex-col-reverse">
            <Logo className="max-[700px]:mt-12" />
            <Button
              className="py-3.75 px-12 text-[16px] rounded-xl font-semibold max-[1000px]:px-8 max-[1000px]:py-2.75 max-[700px]:ml-auto max-[700px]:mt-7"
              textColor="text-primary-blue"
              border="border-2"
              onClick={() => navigate("/login")}
              // onClick={handleStart}
            >
              Sign In
            </Button>
          </div>
          <div className="mt-25 max-[1000px]:mt-15 max-[700px]:mt-4">
            <h1 className="text-text-color font-bold text-[32px] leading-10">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="text-text-color font-medium text-[16px] leading-6 pt-4">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-6 max-[700px]:grid-cols-1">
              <div className="flex gap-2.5 items-center max-[700px]:bg-soft-gray max-[700px]:px-3 max-[700px]:py-2 max-[700px]:rounded-xl">
                <Image
                  src="./images/fork-knife-fill.png"
                  className="bg-light-orange p-2.5 rounded-xl"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Freshly Prepared
                </p>
              </div>
              <div className="flex gap-2.5 items-center max-[700px]:bg-soft-gray max-[700px]:px-3 max-[700px]:py-2 max-[700px]:rounded-xl">
                <Image
                  src="./images/fork-knife-fill.png"
                  className="bg-light-orange p-2.5 rounded-xl"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Support Local Business
                </p>
              </div>
              <div className="flex gap-2.75 items-center max-[700px]:bg-soft-gray max-[700px]:px-3 max-[700px]:py-2 max-[700px]:rounded-xl">
                <Image
                  src="./images/card-fill.png"
                  className="bg-light-orange p-2.5 rounded-xl"
                />
                <p className="text-text-color font-medium text-[16px] leading-6">
                  Fast & Reliable Delivery
                </p>
              </div>
            </div>
            <Button
              className="w-full font-semibold text-[16px] leading-6 py-4.75 rounded-xl mt-10"
              bgColor="bg-primary-color"
              textColor="text-white"
            >
              Start Your Order
            </Button>
            <Button
              className="w-full font-semibold text-[16px] leading-6 py-4.75 rounded-xl mt-10 max-[830px]:mt-6"
              textColor="text-primary-blue"
              border="border-2"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="text-text-color text-center mt-35 mb-20 font-medium text-[15px] max-[830px]:mt-25">
            <hr className="mb-5 text-soft-gray" />
            &copy; 2024 Chuks Kitchen.
            <span className="text-soft-blue pl-4 text-[14px] font-medium leading-5">
              Privacy Policy
            </span>
            <span className="text-soft-blue pl-4 text-[14px] font-medium leading-5">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
