import "./Main.scss";

function Main() {
  const obtenerFechaHora = () => {
    const ahora = new Date();
    const dia = ahora.toLocaleString("es-ES", { day: '2-digit' });
    let mes = ahora.toLocaleString("es-ES", { month: "long" });
    const hora = ahora.toLocaleString("es-ES", { hour: '2-digit', minute: '2-digit', hour12: false  });
    mes = mes.charAt(0).toUpperCase() + mes.slice(1)
    // Construye la cadena de fecha y hora
    const fechaHora = `${dia} ${mes} ${hora}`;

    return fechaHora;
  };

  return (
    <>
      <main>
        <section className="main__exchange__container">
          <div className="backgroundImg"></div>
          <div className="main__exchange__container--title">
            <h2>Visibilizamos todas las tazas de cambio.</h2>
            <p>
              Traemos información en tiempo real de las casas de cambio y las
              monedas más importantes del mundo.
            </p>
          </div>
          <section className="main__table--container">
            <div>
              <p className="main__table--title">Monedas</p>
              <div className="main__grid--container">
                <div className="main__grid--child">Bitcoin</div>
                <div className="main__grid--child value">
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
                <div className="main__grid--child">Stellar</div>
                <div className="main__grid--child value">
                  4.96
                  <span className="down"></span>
                </div>
              </div>
              <p className="main__table--update">
                <span>Actualizado:</span> {obtenerFechaHora()}
              </p>
            </div>
          </section>
        </section>

        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default Main;
