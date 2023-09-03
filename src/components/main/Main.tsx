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

        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default Main;
