export default function FindFooter() {
  return (
    <footer className="mt-[60px] border-t border-[#eee] px-6 py-[30px] text-center text-[#7b8491]">
      <p className="mb-[18px] text-[13px]">
        © <span>{new Date().getFullYear()}</span>, made with{" "}
        <i className="fa-solid fa-heart text-pink"></i> by{" "}
        <strong>HBC</strong> for a better web.
      </p>
      <nav className="flex justify-center gap-[25px]">
        <a href="/about" className="text-[13px] text-[#737c89]">
          About
        </a>
        <a href="#" className="text-[13px] text-[#737c89]">
          Programs
        </a>
        <a href="#" className="text-[13px] text-[#737c89]">
          Contact
        </a>
      </nav>
    </footer>
  );
}
