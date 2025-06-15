export default function AsisaOcaso() {
  return (
    <div className="wrap">
      <div
        style={{
          display: "flex",
          width: "100%",
          background: "var(--primary-gradient)",
          gap: 48,
        }}
      >
        <p
          style={{
            flex: "1 1 50%",
            justifyContent: "space-between",
            color: "white",
            marginInlineStart: 32,
            fontSize: 24,
            alignSelf: "center",
          }}
        >
          Vivir con la tranquilidad de tenerlo todo previsto es más fácil con
          nuestro Seguro de Decesos.
        </p>
        <picture
          style={{
            marginInlineStart: "auto",
            flex: "1 1 50%",
            display: "contents",
          }}
        >
          <source media="(min-width: 768px)" srcSet="/campaigns/decesos.webp" />
          <img
            src="/campaigns/decesos_mobile.webp"
            style={{
              display: "block",
              marginInlineStart: "auto",
              maxHeight: 600,
              objectFit: "cover",
              width: "50%",
            }}
          />
        </picture>
      </div>
      <h1>
        Con tu seguro Decesos OCASO, podrás cuidar de ti y de los tuyos con un
        servicio sobresaliente, que cubre los gastos en caso de fallecimiento.
      </h1>
      <p>
        En ASISA, entendemos la importancia de estar preparados para los
        momentos más difíciles de la vida. Por eso, ofrecemos seguros de decesos
        diseñados para proporcionar tranquilidad y apoyo a tus seres queridos
        cuando más lo necesitan.
      </p>
      <p>
        Nuestro objetivo es ayudarte a planificar y cubrir todos los gastos
        relacionados con el fallecimiento, aliviando a tu familia de
        preocupaciones económicas y logísticas. En ASISA encontrarás información
        útil y consejos sobre cómo elegir el mejor seguro de decesos para ti y
        tu familia.
      </p>
      <p>
        Acompáñanos y descubre cómo podemos ayudarte a asegurar la paz y la
        serenidad en los momentos más delicados.
      </p>
      <i>
        <small>Consulta condiciones</small>
      </i>
    </div>
  );
}
