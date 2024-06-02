import "../styles/Footer.css";

/**
 *
 * @returns {JSX} : Footer : bas-de-page
 *
 */

function Footer() {
  return (
    <div className="footer">
      <img className="footerLogo" src="/logo_footer.jpg" alt="logoFoot" />
      <p className="footerP">
        {" "}
        <span className="footerSpan">© 2020 Kasa. All</span> rights reserved
      </p>
    </div>
  );
}

export default Footer;
