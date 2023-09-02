import "./Header.scss";
import LogoImg from "../../assets/imgs/batatabit-name.svg";
function Header() {
  return (
    <>
      <header>
        <img src={LogoImg} alt="" />
        <div className="header__title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
          <p>
            Batatabit te ayuda a navegar entre los diferentes precios y
            tendencias.
          </p>
          <a href="" className="header__button">
            Conoce Nuestros Planes <span>i</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
