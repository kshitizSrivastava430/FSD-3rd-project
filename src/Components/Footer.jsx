const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">FSD Workshop CSE-22</h3>
        <p className="footer-sub">
          Full Stack Development 2nd Year Portfolio & Lab Material by Krishna Porwal.
        </p>

        <div className="social-links">
          <a href="https://github.com/krishporwal011" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:krishporwal486@gmail.com">
            Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Krishna Porwal (CSE-22). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
