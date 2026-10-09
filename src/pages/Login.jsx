import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [toast, setToast] = useState({ show: false, text: "" });

  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  function showToast(text) {
    setToast({ show: true, text });
    setTimeout(() => setToast({ show: false, text: "" }), 2500);
  }

  function checkField(value, minLength = 1) {
    return value.trim().length >= minLength;
  }

  function handleSignIn(e) {
    e.preventDefault();
    const newErrors = {};
    if (!checkField(signIn.email)) {
      newErrors.email = "Please enter your email or phone number.";
    }
    if (!checkField(signIn.password, 6)) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      showToast("Signed in successfully!");
      setTimeout(() => navigate("/dashboard"), 1200);
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    const newErrors = {};
    if (!checkField(signUp.name)) newErrors.name = "Please enter your full name.";
    if (!checkField(signUp.email))
      newErrors.email = "Please enter your email or phone number.";
    if (!checkField(signUp.password, 6))
      newErrors.password = "Password must be at least 6 characters.";
    if (signUp.confirm !== signUp.password)
      newErrors.confirm = "Passwords do not match.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      showToast("Account created successfully!");
      setSignUp({ name: "", email: "", password: "", confirm: "" });
      setMode("signin");
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1 className="hero-title">Welcome to HBC Admin Panel!</h1>
          <p className="hero-subtitle">
            Manage students, instructors, and projects in one place.
          </p>
        </div>
      </section>

      <div className="auth-card-wrapper">
        <div className="auth-card">
          <div className={`auth-form${mode === "signin" ? " active" : ""}`}>
            <h2 className="auth-title">Sign in to HBC Admin</h2>

            <div className="social-login">
              <button type="button" className="social-btn facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button type="button" className="social-btn google">
                <i className="fa-brands fa-google"></i>
              </button>
            </div>

            <form onSubmit={handleSignIn} noValidate>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  value={signIn.email}
                  onChange={(e) =>
                    setSignIn({ ...signIn, email: e.target.value })
                  }
                  className={errors.email ? "invalid" : ""}
                />
                <span className="error-msg">{errors.email}</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Please enter your password"
                  value={signIn.password}
                  onChange={(e) =>
                    setSignIn({ ...signIn, password: e.target.value })
                  }
                  className={errors.password ? "invalid" : ""}
                />
                <span className="error-msg">{errors.password}</span>
              </div>
              <button type="submit" className="btn btn-pink">
                SIGN IN
              </button>
            </form>

            <div className="auth-links">
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
              <label className="remember-me">
                <input type="checkbox" /> <span>Remember me</span>
              </label>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="btn btn-blue"
              onClick={() => {
                setErrors({});
                setMode("signup");
              }}
            >
              SIGN UP
            </button>
          </div>

          <div className={`auth-form${mode === "signup" ? " active" : ""}`}>
            <h2 className="auth-title">Create your HBC Admin account</h2>

            <div className="social-login">
              <button type="button" className="social-btn facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button type="button" className="social-btn google">
                <i className="fa-brands fa-google"></i>
              </button>
            </div>

            <form onSubmit={handleSignUp} noValidate>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Full name"
                  value={signUp.name}
                  onChange={(e) =>
                    setSignUp({ ...signUp, name: e.target.value })
                  }
                  className={errors.name ? "invalid" : ""}
                />
                <span className="error-msg">{errors.name}</span>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  value={signUp.email}
                  onChange={(e) =>
                    setSignUp({ ...signUp, email: e.target.value })
                  }
                  className={errors.email ? "invalid" : ""}
                />
                <span className="error-msg">{errors.email}</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Create a password"
                  value={signUp.password}
                  onChange={(e) =>
                    setSignUp({ ...signUp, password: e.target.value })
                  }
                  className={errors.password ? "invalid" : ""}
                />
                <span className="error-msg">{errors.password}</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={signUp.confirm}
                  onChange={(e) =>
                    setSignUp({ ...signUp, confirm: e.target.value })
                  }
                  className={errors.confirm ? "invalid" : ""}
                />
                <span className="error-msg">{errors.confirm}</span>
              </div>
              <button type="submit" className="btn btn-blue">
                SIGN UP
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="btn btn-pink"
              onClick={() => {
                setErrors({});
                setMode("signin");
              }}
            >
              BACK TO SIGN IN
            </button>
          </div>
        </div>
      </div>

      <nav className="bottom-links">
        <a href="/about">About HBC</a>
        <a href="#">Our Programs</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className={`toast${toast.show ? " show" : ""}`}>{toast.text}</div>
    </>
  );
}
