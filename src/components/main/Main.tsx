import { useState } from "react";
import "./Main.scss";

function Main() {
  const [showMoney, setShowMoney] = useState<boolean>(true);
  const obtenerFechaHora = () => {
    const ahora = new Date();
    const dia = ahora.toLocaleString("es-ES", { day: "2-digit" });
    let mes = ahora.toLocaleString("es-ES", { month: "long" });
    const hora = ahora.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    mes = mes.charAt(0).toUpperCase() + mes.slice(1);
    // Construye la cadena de fecha y hora
    const fechaHora = `${dia} ${mes} ${hora}`;

    return fechaHora;
  };
  const switchShow = () => {
    setShowMoney(!showMoney);
  };

  return (
    <>
      <main>
        <section className="main__exchange__container">
          <div className="backgroundImg"></div>
          <div className="main__exchange__container--title">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>
              Traemos información en tiempo real de las casas de cambio y las
              monedas más importantes del mundo.
            </p>
          </div>
          {showMoney ? (
            <section className="main__table--container">
              <div>
                <p className="main__table--title orange">Monedas</p>
                <div className="container_split">
                  <div className="main__grid--container">
                    <div className="main__grid--child table__top-left">
                      <span className="logo__bitcoin"></span>Bitcoin
                    </div>
                    <div className="main__grid--child value table__top-right">
                      1.96 <span className="down"></span>
                    </div>
                    <div className="main__grid--child">Ethereum</div>
                    <div className="main__grid--child value">
                      0.07
                      <span className="up"></span>
                    </div>
                    <div className="main__grid--child">Ripple</div>
                    <div className="main__grid--child value">
                      2.15
                      <span className="down"></span>
                    </div>
                    <div className="main__grid--child table__bottom-left">
                      Stellar
                    </div>
                    <div className="main__grid--child value table__bottom-right">
                      4.96
                      <span className="down"></span>
                    </div>
                  </div>
                  <span className="arrow--right" onClick={switchShow}></span>
                </div>
                <p className="main__table--update orange">
                  <span>Actualizado:</span> {obtenerFechaHora()}
                </p>
              </div>
            </section>
          ) : (
            <>
              <section className="main__table--container">
                <div>
                  <p className="main__table--title blue">Comisiones</p>
                  <div className="container_split">
                    <span className="arrow--left" onClick={switchShow}></span>
                    <div className="main__grid--container">
                      <div className="main__grid--child table__top-left">
                        Bitrade
                      </div>
                      <div className="main__grid--child value table__top-right">
                        12.96
                      </div>
                      <div className="main__grid--child">Bitpreco</div>
                      <div className="main__grid--child value">13.07</div>
                      <div className="main__grid--child">Novadax</div>
                      <div className="main__grid--child value">13.15</div>
                      <div className="main__grid--child table__bottom-left">
                        Coinext
                      </div>
                      <div className="main__grid--child value table__bottom-right">
                        14.96
                      </div>
                    </div>
                  </div>
                  <p className="main__table--update blue">
                    <span>Actualizado:</span> {obtenerFechaHora()}
                  </p>
                </div>
              </section>
            </>
          )}
        </section>
        <section className="main-product-detail">
          <span className="product-detail--batata-logo"></span>
          <div className="product-detail--title">
            <h2>Creamos un producto sin comparación.</h2>
            <p>Confiable y diseñado para su uso diario.</p>
          </div>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <span className="clock"></span>
              <p className="product--card-title">Tiempo real</p>
              <p className="product--card-body">
                Nuestro API toma información minuto a minuto sobre las tasas que
                más determinan el comportamiento.
              </p>
            </article>
          </section>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <span className="eye"></span>
              <p className="product--card-title">No hay tasas escondidas</p>
              <p className="product--card-body">
                Ni en la compra o al momento de exit, Batabit siempre te muestra
                el costo real de lo que estás adquiriendo.
              </p>
            </article>
          </section>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <span className="dollar"></span>
              <p className="product--card-title">Compara monedas</p>
              <p className="product--card-body">
                No más rumores, con Babtabit sabrás el valor real de cada moneda
                en el mercado actual.
              </p>
            </article>
          </section>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <span className="check"></span>
              <p className="product--card-title">Información confiable</p>
              <p className="product--card-body">
                Nuestras fuentes están 100% verificadas y continuamos auditando
                su contenido mientras se actualizan.
              </p>
            </article>
          </section>
        </section>
        <section className="bitcoin-img-container">
          <h2>Conócelo hoy</h2>
        </section>
        <section id="plans" className="main-plans-container">
          <div className="plans--title">
            <h2>Escoge el plan que mejor se ajuste a ti.</h2>
            <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
          </div>
          <section className="plans-container--slider">
            <article className="plans-container--card">
              <p className="basic">Básico</p>
              <div className="plan-info-container">
                <h3 className="plan-card--title">Pago Mensual</h3>
                <p className="plan-card--price">
                  <sup>$</sup> 20
                </p>
                <p className="plan-card--saving">
                  *Ahorras $129 comparado al plan mensual.
                </p>
                <button className="plan-card--ca">
                  Escoge este <span></span>
                </button>
              </div>
            </article>
            <article className="plans-container--card">
              <p className="recomended">Recomendado</p>
              <div className="plan-info-container">
                <h3 className="plan-card--title">Pago Anual</h3>
                <p className="plan-card--price">
                  <sup>$</sup> 99
                </p>
                <p className="plan-card--saving">
                  *Ahorras $129 comparado al plan mensual.
                </p>
                <button className="plan-card--ca">
                  Escoge este <span></span>
                </button>
              </div>
            </article>
            <article className="plans-container--card">
              <p className="limit">Limitado</p>
              <div className="plan-info-container">
                <h3 className="plan-card--title">Perpetuo</h3>
                <p className="plan-card--price">
                  <sup>$</sup> 200
                </p>
                <p className="plan-card--saving">
                  *Ahorras $129 comparado al plan mensual.
                </p>
                <button className="plan-card--ca">
                  Escoge este <span></span>
                </button>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Main;
