import Button from "../components/Button";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";
import SignInHeader from "../components/SignInHeader";
import SignInForm from "../components/SignInForm";
import SigInBtns from "../components/SigInBtns";
import SignInBgEffect from "../components/SignInBgEffect";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex max-[700px]:flex-col">
        <SignInBgEffect />
        <div className="w-full px-26 py-40 bg-soft-gray max-[1000px]:px-14 max-[700px]:py-10 max-[700px]:bg-white max-[400px]:px-6 max-[320px]:px-2">
          <SignInHeader />
          <div className="mt-5">
            <SignInForm />
            <SigInBtns />
            <TextBox
              className="text-center text-[12px] leading-4 mt-4"
              textColor="text-text-dark-grey"
            >
              Don't have an account?{" "}
              <Button
                onClick={() => navigate("/sign-up")}
                textColor="text-primary-blue"
              >
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
