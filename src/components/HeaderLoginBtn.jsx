import Button from "./Button";

function HeaderLoginBtn() {
  return (
    <Button
      bgColor="bg-primary-color"
      textColor="text-white"
      className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold cursor-pointer max-[1000px]:px-8 max-[1000px]:py-2.75"
    >
      Login
    </Button>
  );
}
export default HeaderLoginBtn;
