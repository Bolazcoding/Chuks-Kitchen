import Button from "./Button";

function HeaderLoginBtn() {
  return (
    <Button
      bgColor="bg-primary-color"
      textColor="text-white"
      className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold cursor-pointer max-[1000px]:px-8 max-[1000px]:py-2.75 max-[790px]:bg-white max-[790px]:text-primary-color max-[790px]:text-xl max-[790px]:mt-16 max-[790px]:py-4 max-[790px]:px-20"
    >
      Login
    </Button>
  );
}
export default HeaderLoginBtn;
