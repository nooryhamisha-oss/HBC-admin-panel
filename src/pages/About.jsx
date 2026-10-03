import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f4f5f8] font-segoe text-[#555]">
      <p>about.html در پروژه اصلی خالی بود، پس اینجا فقط یک صفحه‌ی خالی جایگزین آن شد.</p>
      <Link to="/" className="text-purple underline">
        بازگشت به صفحه ورود
      </Link>
    </div>
  );
}
