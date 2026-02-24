import { useState } from "react";
import Image from "./Image";
import { IonIcon } from "@ionic/react";
import { eyeOff } from "ionicons/icons";
import { eye } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { call } from "ionicons/icons";
import Button from "./Button";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div>
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Email or phone number
        </p>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <IonIcon icon={mail} className="text-icon-text text-xl" />
          <input
            type="email"
            className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
            placeholder="name@gmail.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Phone number
        </p>
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
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Password
        </p>
        <div className=" flex items-center justify-between border border-text-dark-grey/50 py-4 pl-4 pr-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Image src="./images/lockIcons.svg" alt="lockIcons" />
            <input
              type={showPassword ? "text" : "password"}
              className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
              placeholder="******"
            />
          </div>
          <Button
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
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Confirm Password
        </p>
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
    </div>
  );
}

export default SignUpForm;
