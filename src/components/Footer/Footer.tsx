import './footer.scss';

export function Footer() {
  return (
    <footer className="footer text-text">
      <p className="text-sm opacity-90">
        © {new Date().getFullYear()} Kristiansand Svømmeallianse
      </p>
    </footer>
  );
}
