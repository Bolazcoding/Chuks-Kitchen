import Image from "./Image";
import Button from "./Button";

function NewMenu() {
  return (
    <section className="mt-25">
      <div className="relative w-full min-h-[85vh] overflow-hidden">
        <Image
          src="/images/newMenu.png"
          alt="newMenu"
          // width={1075}
          // height={589}
          //   className="absolute object-cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-text-color/50"></div>

        <div className="maxWidth relative z-10 flex flex-col justify-center h-full py-35 ">
          <div>
            <h1 className="text-white text-5xl font-extrabold leading-[140%]">
              Introducing Our New Menu Additions!
            </h1>
            <p className="text-2xl font-semibold leading-8.5 mt-7 w-2xl">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>
            <Button
              bgColor="bg-primary-color"
              textColor="text-white"
              className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold mt-7"
            >
              Discover what's new
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewMenu;
