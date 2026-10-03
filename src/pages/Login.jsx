import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin"); // "signin" | "signup"

  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [signInErrors, setSignInErrors] = useState({});

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [signUpErrors, setSignUpErrors] = useState({});

  const [toast, setToast] = useState("");

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  }

  function handleSignIn(e) {
    e.preventDefault();
    const errors = {};

    if (signIn.email.trim() === "") {
      errors.email = "Please enter your email or phone number.";
    }
    if (signIn.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setSignInErrors(errors);

    if (Object.keys(errors).length === 0) {
      showToast("Signed in successfully!");
      setTimeout(() => navigate("/dashboard"), 1200);
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    const errors = {};

    if (signUp.name.trim() === "") {
      errors.name = "Please enter your full name.";
    }
    if (signUp.email.trim() === "") {
      errors.email = "Please enter your email or phone number.";
    } else if (!signUp.email.includes("@")) {
      errors.email = "Email add contain @.";
    }
    if (signUp.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (signUp.confirm !== signUp.password) {
      errors.confirm = "Passwords do not match.";
    }

    setSignUpErrors(errors);

    if (Object.keys(errors).length === 0) {
      showToast("Account created successfully!");
      setSignUp({ name: "", email: "", password: "", confirm: "" });
      setMode("signin");
    }
  }

  const inputClass = (hasError) =>
    `w-full rounded-lg border px-4 py-3 text-[0.95rem] outline-none bg-[#fafafe] focus:border-purple focus:shadow-[0_0_0_3px_rgba(178,63,214,0.12)] ${
      hasError ? "border-danger" : "border-[#e3e3ec]"
    }`;

  return (
    <div className="min-h-screen bg-[#f4f5f8] font-segoe">
      <section
        className="relative overflow-hidden px-5 pb-[190px] pt-[70px] text-center [@media(max-width:480px)]:pb-[150px] [@media(max-width:480px)]:pt-[60px]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(20,10,40,0.15)]" />
        <div className="relative z-[2]">
          <h1 className="mb-2.5 text-[2.2rem] font-bold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.25)] [@media(max-width:480px)]:text-[1.6rem]">
            Welcome to HBC Admin Panel!
          </h1>
          <p className="text-white/90">
            Manage students, instructors, and projects in one place.
          </p>
        </div>
      </section>

      <div className="relative z-[3] mx-auto -mt-[170px] max-w-[460px] px-5 [@media(max-width:480px)]:-mt-[130px]">
        <div className="rounded-[14px] bg-white p-[32px_30px] text-left shadow-[0_15px_40px_rgba(0,0,0,0.25)] [@media(max-width:480px)]:p-[26px_20px]">
          {mode === "signin" ? (
            <div>
              <h2 className="mb-[22px] text-center text-[1.2rem] font-bold">
                Sign in to HBC Admin
              </h2>
              <div className="mb-[22px] flex justify-center gap-4">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3e3ec] bg-white text-[1.1rem] text-[#1877f2]"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3e3ec] bg-white text-[1.1rem] text-[#ea4335]"
                >
                  <i className="fa-brands fa-google"></i>
                </button>
              </div>

              <form onSubmit={handleSignIn} noValidate>
                <div className="mb-3.5">
                  <input
                    type="text"
                    placeholder="Email or Phone number"
                    value={signIn.email}
                    onChange={(e) =>
                      setSignIn({ ...signIn, email: e.target.value })
                    }
                    className={inputClass(signInErrors.email)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signInErrors.email}
                  </span>
                </div>
                <div className="mb-3.5">
                  <input
                    type="password"
                    placeholder="Please enter your password"
                    value={signIn.password}
                    onChange={(e) =>
                      setSignIn({ ...signIn, password: e.target.value })
                    }
                    className={inputClass(signInErrors.password)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signInErrors.password}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-pink to-purple py-3.5 text-[0.9rem] font-bold text-white"
                >
                  SIGN IN
                </button>
              </form>

              <div className="mt-3.5 flex justify-between text-[0.8rem]">
                <a href="#" className="text-purple">
                  Forgot password?
                </a>
                <label className="flex items-center gap-1.5 text-[#6b6b80]">
                  <input type="checkbox" /> <span>Remember me</span>
                </label>
              </div>

              <div className="my-[18px] flex items-center text-[0.8rem] text-[#a3a3b8] before:h-px before:flex-1 before:bg-[#e3e3ec] before:content-[''] after:h-px after:flex-1 after:bg-[#e3e3ec] after:content-['']">
                <span className="px-3">or</span>
              </div>

              <button
                type="button"
                onClick={() => setMode("signup")}
                className="w-full rounded-lg bg-gradient-to-r from-blue3 to-blue py-3.5 text-[0.9rem] font-bold text-white"
              >
                SIGN UP
              </button>
            </div>
          ) : (
            <div>
              <h2 className="mb-[22px] text-center text-[1.2rem] font-bold">
                Create your HBC Admin account
              </h2>
              <div className="mb-[22px] flex justify-center gap-4">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3e3ec] bg-white text-[1.1rem] text-[#1877f2]"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3e3ec] bg-white text-[1.1rem] text-[#ea4335]"
                >
                  <i className="fa-brands fa-google"></i>
                </button>
              </div>

              <form onSubmit={handleSignUp} noValidate>
                <div className="mb-3.5">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={signUp.name}
                    onChange={(e) =>
                      setSignUp({ ...signUp, name: e.target.value })
                    }
                    className={inputClass(signUpErrors.name)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signUpErrors.name}
                  </span>
                </div>
                <div className="mb-3.5">
                  <input
                    type="text"
                    placeholder="Email or Phone number"
                    value={signUp.email}
                    onChange={(e) =>
                      setSignUp({ ...signUp, email: e.target.value })
                    }
                    className={inputClass(signUpErrors.email)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signUpErrors.email}
                  </span>
                </div>
                <div className="mb-3.5">
                  <input
                    type="password"
                    placeholder="Create a password"
                    value={signUp.password}
                    onChange={(e) =>
                      setSignUp({ ...signUp, password: e.target.value })
                    }
                    className={inputClass(signUpErrors.password)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signUpErrors.password}
                  </span>
                </div>
                <div className="mb-3.5">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={signUp.confirm}
                    onChange={(e) =>
                      setSignUp({ ...signUp, confirm: e.target.value })
                    }
                    className={inputClass(signUpErrors.confirm)}
                  />
                  <span className="mt-1 block min-h-[16px] text-[0.75rem] text-danger">
                    {signUpErrors.confirm}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue3 to-blue py-3.5 text-[0.9rem] font-bold text-white"
                >
                  SIGN UP
                </button>
              </form>

              <div className="my-[18px] flex items-center text-[0.8rem] text-[#a3a3b8] before:h-px before:flex-1 before:bg-[#e3e3ec] before:content-[''] after:h-px after:flex-1 after:bg-[#e3e3ec] after:content-['']">
                <span className="px-3">or</span>
              </div>

              <button
                type="button"
                onClick={() => setMode("signin")}
                className="w-full rounded-lg bg-gradient-to-r from-pink to-purple py-3.5 text-[0.9rem] font-bold text-white"
              >
                BACK TO SIGN IN
              </button>
            </div>
          )}
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-7 px-5 py-6 text-[0.85rem] text-[#6b6b80]">
        <a href="/about">About HBC</a>
        <a href="#">Our Programs</a>
        <a href="#">Contact Us</a>
      </nav>

      <div
        className={`fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 rounded-lg bg-[#2b2b3d] px-[22px] py-3 text-[0.85rem] text-white transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        {toast}
      </div>
    </div>
  );
}
