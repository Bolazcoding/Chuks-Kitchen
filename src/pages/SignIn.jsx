import Image from "../components/Image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";
import SignInHeader from "../components/SignInHeader";
import SignInForm from "../components/SignInForm";
import SigInBtns from "../components/SigInBtns";

function SignIn() {
  return (
    <>
      <div className="flex">
        <Image src="/images/Rectangle-1.jpg" alt="signIn-img" />
        <div className="w-full px-26 py-40 bg-soft-gray">
          <SignInHeader />
          <div className="mt-5">
            <SignInForm />
            <SigInBtns />
            <TextBox
              className="text-center text-[12px] leading-4 mt-4"
              textColor="text-text-dark-grey"
            >
              Don't have an account?{" "}
              <Button className="cursor-pointer" textColor="text-primary-blue">
                Create an account
              </Button>
            </TextBox>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
