import "./campaigns.css";
export default function AsisaTravel() {
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
          Protege tu viaje con ASISA Viajes
        </p>
        <picture
          style={{
            marginInlineStart: "auto",
            flex: "1 1 50%",
            display: "contents",
          }}
        >
          <source
            media="(min-width: 768px)"
            srcSet="/campaigns/asisa-travel.jpg"
          />
          <img
            src="/campaigns/asisa-travel.jpg"
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
      <h1>Prepárate para tu viaje: relájate y disfruta sin preocupaciones.</h1>
      <p>
        ¡Que nada estropee el recuerdo de tus vacaciones! En ASISA te ofrecemos
        <strong> la protección más completa para tu viaje</strong>, y si
        <strong>
          {" "}
          contratas una póliza por un importe de 100€ o más de ASISA Travel and
          You
        </strong>{" "}
        o de cualquier producto de ASISA Travel antes del 30 de septiembre,{" "}
        <strong>¡te regalamos un neceser plegable!</strong> Para que te lleves
        la salud a todas partes.
      </p>
      <p>Protégete con ASISA Travel and You.</p>
      <p>
        <strong>Cualquier seguro de viajes de ASISA</strong> te da acceso a:
      </p>
      <ul>
        <li>Asistencia médica y sanitaria.</li>
        <li> Repatriación/transporte sanitario de heridos/enfermos.</li>
        <li> Repatriación/transporte del asegurado fallecido.</li>
        <li>Gastos odontológicos urgentes.</li>
        <li> Regreso anticipado por fallecimiento de un familiar.</li>
        <li> Regreso anticipado por hospitalización de un familiar.</li>
        <li>Prolongación estancia en hotel por prescripción médica.</li>
        <li>
          Desplazamiento de una persona por hospitalización del asegurado.
        </li>
        <li> Pérdidas materiales.</li>
        <li>Demora en la entrega del equipaje.</li>
        <li> Búsqueda, localización y envío de equipajes extraviados.</li>
        <li> Gastos por demora del transporte.</li>
      </ul>
      <p>
        <strong>ASISA Travel And You </strong> también incluye:
        <ul>
          <li>Asistencia médica y sanitaria (hasta 100.000€).</li>
          <li>
            Repatriación o transporte sanitario de heridos/enfermos y
            fallecidos.
          </li>
          <li>Garantías de equipaje.</li>
          <li>Anulación e interrupción de viaje.</li>
          <li>Fallecimiento e invalidez por accidente.</li>
          <li>Accidentes y responsabilidad civil.</li>
        </ul>
      </p>
      <i>
        <small>Consulta condiciones</small>
      </i>
    </div>
  );
}
