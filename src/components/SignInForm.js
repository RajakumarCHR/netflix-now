import { Link } from "react-router-dom";
import validate from "../validator/validate";
import { PAGE } from "../router/routes";
import { useRef, useState } from "react";

const SignInform = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const emailPhone = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    const isValid = validate(emailPhone.current.value, password.current.value);
    setErrorMessage(isValid);
    if (isValid === true) {
      console.log("login success");
      console.log(emailPhone.current.value);
      console.log(password.current.value);
    }
  };

  return (
    <div className="bg-black/70 w-full sm:w-[450px] m-auto px-6 md:px-16 py-8 md:py-12 mx-4 sm:mx-auto flex items-center rounded-lg">
      <div className="w-full">
        <h1 className="mb-5 text-white text-3xl">Sign In</h1>
        <div className="mb-2 text-white">
          <input
            type="text"
            ref={emailPhone}
            placeholder="Email or Phone Number"
            className={`px-4 py-4 w-full bg-[#333] border-b-2 rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm ${
              errorMessage?.emailPhone
                ? "border-[#e87c03]"
                : "border-transparent"
            }`}
          />
          <div className="error px-1 py-2 text-[#e87c03] text-xs">
            {errorMessage?.emailPhone}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2 text-white">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className={`px-4 py-4 w-full bg-[#333] border-b-2 rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm ${
                errorMessage?.password
                  ? "border-[#e87c03]"
                  : "border-transparent"
              }`}
            />
            <div className="error px-1 py-2 text-[#e87c03] text-xs">
              {errorMessage?.password}
            </div>
          </div>
          <div className="my-2">
            <button
              onClick={handleSignIn}
              className="px-4 py-3 mt-4 bg-red-primary text-white block w-full rounded-[4px]"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2 items-center">
            <input
              id="rememberPswrd"
              type="checkbox"
              className="appearance-none rounded-sm w-4 h-4 bg-[#333] relative flex items-center justify-center checked:bg-[#4d4c4c] checked:text-white checked:before:content-['✓'] before:absolute "
            />
            <label htmlFor="rememberPswrd" className="text-xs cursor-pointer">
              Remember Password
            </label>
          </div>
          <div className="help">
            <a href="#!" className="text-xs hover:underline">
              Need Help?
            </a>
          </div>
        </div>
        <div className="text-md mt-8 flex items-center gap-2">
          <span className="text-sm">New to NetflixNow?</span>
          <Link to={PAGE.SIGNUP} className="text-white text-sm hover:underline">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInform;
