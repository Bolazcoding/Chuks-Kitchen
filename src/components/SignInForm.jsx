import { useState } from "react";
import Image from "./Image";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { eyeOff } from "ionicons/icons";
import { eye } from "ionicons/icons";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div>
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Email or phone number
        </p>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <Image src="./images/mailIcons.svg" alt="mailIcons" />
          <input
            type="email"
            className="text-text-color text-[16px] leading-[140%] border-0 outline-none placeholder:text-black "
            placeholder="name@gmail.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Password
        </p>
        <div className=" flex items-center justify-between border border-text-dark-grey/50 py-4 pl-4 pr-4 rounded-lg max-[320px]:pr-5">
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
    </div>
  );
}

export default SignInForm;
