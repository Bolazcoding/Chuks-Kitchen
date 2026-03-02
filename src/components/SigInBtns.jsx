import Image from "./Image";
import Button from "./Button";

function SigInBtns() {
  // const navigate = useNavigate();

  return (
    <div>
      <p className="text-text-color text-[12px] font-normal text-center leading-4 py-3">
        Or continue with
      </p>

      <Button
        type="button"
        className="w-full font-normal text-[14px] py-3 rounded-lg mt-7 bg-white cursor-pointer"
        textColor="text-text-dark-grey"
        border="border"
      >
        <span className="flex items-center justify-center gap-2.5">
          <Image src="./images/googlelogin.png" />
          <p>Continue with Google</p>
        </span>
      </Button>
      <Button
        type="button"
        className="w-full font-normal text-[14px] py-3 rounded-lg mt-7 bg-white cursor-pointer"
        textColor="text-text-dark-grey"
        border="border"
      >
        <span className="flex items-center justify-center gap-2.5">
          <Image src="./images/facebooklogin.png" />
          <p>Continue with Apple</p>
        </span>
      </Button>
    </div>
  );
}

export default SigInBtns;
