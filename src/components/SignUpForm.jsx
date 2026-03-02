import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOff } from "ionicons/icons";
import { eye } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { call } from "ionicons/icons";
import Image from "./Image";
import Button from "./Button";

function SignUpForm({ setSignedUp, setLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Save fake account
    localStorage.setItem("savedEmail", email);
    localStorage.setItem("savedPassword", password);

    localStorage.setItem("isSignedUp", "true");
    localStorage.setItem("isLoggedIn", "true");

    setSignedUp(true);
    setLoggedIn(true);

    navigate("/home");
  };

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label
          htmlFor="email"
          className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5"
        >
          Email or phone number
        </label>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <IonIcon icon={mail} className="text-icon-text text-xl" />
          <input
            type="email"
            className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
            placeholder="name@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="tel"
          className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5"
        >
          Phone number
        </label>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <IonIcon icon={call} className="text-icon-text text-xl" />
          <input
            type="tel"
            className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
            placeholder="8123340690"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5"
        >
          Password
        </label>
        <div className=" flex items-center justify-between border border-text-dark-grey/50 py-4 pl-4 pr-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Image src="./images/lockIcons.svg" alt="lockIcons" />
            <input
              type={showPassword ? "text" : "password"}
              className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="button"
            className="flex cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IonIcon icon={eye} className="text-icon-text text-xl" />
            ) : (
              <IonIcon icon={eyeOff} className="text-icon-text text-xl" />
            )}
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5"
        >
          Confirm Password
        </label>
        <div className=" flex items-center justify-between border border-text-dark-grey/50 py-4 pl-4 pr-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Image src="./images/lockIcons.svg" alt="lockIcons" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
              placeholder="******"
            />
          </div>
          <Button
            type="button"
            className="flex cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <IonIcon icon={eye} className="text-icon-text text-xl" />
            ) : (
              <IonIcon icon={eyeOff} className="text-icon-text text-xl" />
            )}
          </Button>
        </div>
      </div>
      <Button
        className="w-full font-semibold text-[16px] py-4.75 rounded-lg mt-10 cursor-pointer"
        bgColor="bg-primary-color"
        textColor="text-white"
        type="submit"
        // onClick={() => navigate("/home")}
      >
        Continue
      </Button>
    </form>
  );
}

export default SignUpForm;
