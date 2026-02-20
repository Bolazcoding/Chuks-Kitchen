import Image from "./Image";

function SignInForm() {
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
            className="text-text-color text-[16px] leading-[140%] border-0 "
            placeholder="name@gmail.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-text-dark-grey text-[14px] leading-5 font-medium pb-1.5">
          Password
        </p>
        <div className="flex items-center gap-2 border border-text-dark-grey/50 py-4 pl-4 rounded-lg">
          <Image src="./images/lockIcons.svg" alt="lockIcons" />
          <input
            type="password"
            className="text-text-color text-[16px] leading-[140%] border-0 "
            placeholder="******"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
