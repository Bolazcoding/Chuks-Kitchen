import Image from "../components/Image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";
import SignInHeader from "../components/SignInHeader";
import SigInBtns from "../components/SigInBtns";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <div className="flex">
        <Image src="/images/Rectangle-1.jpg" alt="signIn-img" />
        <div className="w-full px-26 py-28 bg-soft-gray">
          <SignInHeader />
          <div className="mt-5">
            <SignUpForm />
            <SigInBtns />
            <TextBox
              className="text-center text-[12px] leading-4 mt-4"
              textColor="text-text-dark-grey"
            >
              Already have an account?{" "}
              <Button className="cursor-pointer" textColor="text-primary-blue">
                Sign In
              </Button>
            </TextBox>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
