import "./Footer.css";

const footerColumns = [
  {
    title: "",
    links: [
      "FAQ",
      "Investor Relations",
      "Ways to Watch",
      "Corporate Information",
      "Netflix Originals",
    ],
  },
  {
    title: "",
    links: [
      "Help Center",
      "Jobs",
      "Terms of Use",
      "Contact Us",
    ],
  },
  {
    title: "",
    links: [
      "Account",
      "Redeem Gift Cards",
      "Privacy",
      "Speed Test",
    ],
  },
  {
    title: "",
    links: [
      "Media Center",
      "Buy Gift Cards",
      "Cookie Preferences",
      "Legal Notices",
    ],
  },
];

const Footer = ({ columns = footerColumns }) => {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner container">
        <div className="footer-grid">
          {columns.map((col, ci) => (
            <div className="footer-col" key={ci}>
              {col.title && <h4 className="footer-col-title">{col.title}</h4>}
              <ul className="footer-links">
                {col.links.map((link, li) => (
                  <li key={li} className="footer-link-item">
                    <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} YourCompanyName. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
