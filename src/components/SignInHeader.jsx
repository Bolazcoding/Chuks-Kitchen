import Logo from "./Logo";

function SignInHeader() {
  return (
    <div className="text-center">
      <Logo />
      <p className="text-2xl text-text-color font-medium leading-8.5">
        Login your Account
      </p>
    </div>
  );
}

export default SignInHeader;
