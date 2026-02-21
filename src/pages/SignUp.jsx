import Button from "../components/Button";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";
import SignInHeader from "../components/SignInHeader";
import SigInBtns from "../components/SigInBtns";
import SignUpForm from "../components/SignUpForm";
import SignInBgEffect from "../components/SignInBgEffect";

function SignUp() {
  return (
    <>
      <div className="flex">
        <SignInBgEffect />
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

// {/* <div className="relative h-[400px] w-full">
//   {/* Background Image */}
//   <img
//     src="/your-image.jpg"
//     alt="background"
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Dark Overlay */}
//   <div className="absolute inset-0 bg-black/50"></div>

//   {/* Text Content */}
//   <div className="relative z-10 flex items-center justify-center h-full">
//     <h1 className="text-white text-4xl font-bold">Your Text Here</h1>
//   </div>
// </div>; */}
