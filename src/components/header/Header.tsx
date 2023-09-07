import "./Header.scss";
import LogoImg from "../../assets/imgs/batatabit-name.svg";
function Header() {
  return (
    <>
      <header>
        <img src={LogoImg} alt="logo" />
        <div className="header__title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
          <p>
            Batatabit te ayuda a navegar entre los diferentes precios y
            tendencias.
          </p>
          <a href="#plans" className="header__button">
            Conoce Nuestros Planes <span></span>
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
