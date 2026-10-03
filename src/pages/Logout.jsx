import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (form.username.trim() === "") {
      newErrors.username = "Please enter your username.";
    }
    if (form.password.trim() === "") {
      newErrors.password = "Please enter your password.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Logged out successfully!");
      navigate("/");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#f4f5f8] font-segoe">
      <div className="w-[320px] rounded-[10px] bg-white p-[30px] text-center shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
        <h2 className="mb-2 text-xl font-bold">Confirm Log Out</h2>
        <p className="mb-5 text-[0.85rem] text-[#777]">
          Please enter your username and password to log out.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3.5 text-left">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full rounded-md border border-[#ddd] p-2.5"
            />
            <span className="block min-h-[14px] text-[0.75rem] text-red-600">
              {errors.username}
            </span>
          </div>

          <div className="mb-3.5 text-left">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-md border border-[#ddd] p-2.5"
            />
            <span className="block min-h-[14px] text-[0.75rem] text-red-600">
              {errors.password}
            </span>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-pink p-2.5 font-bold text-white"
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}
