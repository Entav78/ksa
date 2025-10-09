// Footer.tsx
import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Bunnmeny" className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Kristiansand Svømmeallianse
        </p>

        <span className="footer__sep" aria-hidden="true">
          •
        </span>

        <a
          className="footer__link"
          href="https://www.facebook.com/KSA.1922"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spond (medlemmer)
        </a>
      </nav>
    </footer>
  );
}
