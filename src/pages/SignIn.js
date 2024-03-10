import SignInform from "../components/SignInForm";
import POSTER_BG from "../assets/poster-bg.jpeg";

const SignIn = () => {
  return (
    <div className="relative text-gray-500 min-h-screen">
      <div className="absolute -z-[1] min-h-screenf h-full">
        <img
          src={POSTER_BG}
          alt="Netflixnow"
          className="w-screen h-full object-cover"
        />
      </div>
      <div className="flex items-center min-h-screen bg-black/60">
        <SignInform />
      </div>
    </div>
  );
};

export default SignIn;
