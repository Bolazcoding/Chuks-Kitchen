import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Image
        src="/images/Welcome.svg"
        alt="hero-img"
        // width={1075}
        // height={589}
        // className="absolute object-cover"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-text-color/50"></div>

      <div className="maxWidth relative z-10 flex items-center h-full mt-45 max-[510px]:mt-55">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl font-bold leading-15.25 max-[510px]:text-[32px] max-[510px]:leading-10">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="text-[32px] font-bold leading-10.5 mt-7 max-[510px]:text-[16px] max-[510px]:leading-6">
            Handcrafted with passion, delivered with care.
          </p>
          <Button
            onClick={() => navigate("/explore")}
            bgColor="bg-primary-color"
            textColor="text-white"
            className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold mt-7 hover:bg-soft-orange"
          >
            Discover what's new
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
