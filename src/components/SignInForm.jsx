import { useState } from "react";
import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { eyeOff } from "ionicons/icons";
import { eye } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

function SignInForm({ setLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      setLoggedIn(true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Email or phone number
        </label>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <Image src="./images/mailIcons.svg" alt="mailIcons" />
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
        <label className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Password
        </label>
        <div className=" flex items-center justify-between border border-text-dark-grey/50 py-4 pl-4 pr-4 rounded-lg max-[320px]:pr-5">
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
            className="flex cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? (
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

export default SignInForm;
