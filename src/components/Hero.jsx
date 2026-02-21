import Image from "./Image";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/Welcome.svg"
        alt="hero-img"
        // width={1075}
        // height={589}
        className="absolute object-cover"
        // className="absolute inset-0 w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-text-color/50"></div>

      <div className="relative z-10 flex flex-col text-center items-center justify-center h-full px-18">
        <h1 className="text-white text-5xl font-bold leading-15.25">
          Chuks Kitchen
        </h1>
        <p className="text-2xl font-medium leading-8.5 mt-2.5">
          Your journey to delicious, authentic Nigerian meals starts here. Sign
          up or log in to order your favorites today!
        </p>
      </div>
    </div>
  );
}

export default Hero;
