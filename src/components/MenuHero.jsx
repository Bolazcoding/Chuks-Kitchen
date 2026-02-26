import Image from "./Image";

function MenuHero() {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden ">
      <Image
        src="/images/explorehero.png"
        alt="hero-img"
        // className="absolute object-cover"
        className="absolute inset-0 w-full h-full object-cover max-[600px]:hidden"
      />

      <Image
        src="/images/Welcome.svg"
        alt="hero-img"
        // className="absolute object-cover"
        className="absolute inset-0 w-full h-full object-cover min-[600px]:hidden"
      />

      <div className="absolute inset-0 bg-text-color/50"></div>

      <div className="maxWidth relative z-10 flex flex-col justify-center h-full mt-45 max-[510px]:mt-52">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl font-bold leading-15.25 max-[510px]:text-[32px] max-[510px]:leading-10">
            Chuks Kitchen
          </h1>
          <p className="text-2xl font-bold leading-10.5 mt-7">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuHero;
