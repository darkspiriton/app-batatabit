import "./Footer.scss";
import logoFooter from "../../assets/imgs/logo-footer.svg";
function Footer() {
  return (
    <>
      <footer>
        <section className="left">
          <ul>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Crunchbase</a>
            </li>
            <li>
              <a href="#">Hackernews</a>
            </li>
          </ul>
        </section>
        <section className="right">
          <img src={logoFooter} alt="Logo Batatabit"></img>
        </section>
      </footer>
    </>
  );
}

export default Footer;
