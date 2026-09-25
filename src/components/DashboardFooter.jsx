export default function DashboardFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-2.5 border-t border-[#eee] bg-white px-6 py-4.5 text-[0.85rem] text-[#666] md:flex-row md:text-left [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:text-center">
      <p>
        © <span>{new Date().getFullYear()}</span>, made with{" "}
        <i className="fa-solid fa-heart text-pink"></i> by <strong>HBC</strong>{" "}
        for a better web.
      </p>
      <nav className="flex gap-4.5">
        <a href="/about">About</a>
        <a href="#">Programs</a>
        <a href="#">Contact</a>
      </nav>
    </footer>
  );
}
