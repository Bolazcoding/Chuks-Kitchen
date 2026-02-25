import Image from "./Image";

function MenuHero() {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden ">
      <Image
        src="/images/explorehero.png"
        alt="hero-img"
        // width={1075}
        // height={589}
        // className="absolute object-cover"
        className="absolute inset-0 w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-text-color/50"></div>

      <div className="maxWidth relative z-10 flex flex-col justify-center h-full">
        <div className="w-3xl">
          <h1 className="text-white text-5xl font-bold leading-15.25">
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
