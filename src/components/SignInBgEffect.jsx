import Image from "./Image";

function SignInBgEffect() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/Rectangle-1.jpg"
        alt="signIn-img"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-primary-color/70"></div>

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

export default SignInBgEffect;
