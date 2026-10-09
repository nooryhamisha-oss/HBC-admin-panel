export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © <span>{year}</span>, made with <i className="fa-solid fa-heart"></i>{" "}
        by <strong>HBC</strong> for a better web.
      </p>
      <nav className="footer-links">
        <a href="/about">About</a>
        <a href="#">Programs</a>
        <a href="#">Contact</a>
      </nav>
    </footer>
  );
}
