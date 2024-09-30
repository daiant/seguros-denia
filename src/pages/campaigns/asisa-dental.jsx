export default function AsisaDentalPage() {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/campaigns/asisa-dental-octubre.jpg"
        />
        <img
          src="/campaigns/asisa-dental-octubre-mobile.jpg"
          style={{ width: "100%" }}
        />
      </picture>
      <h1>Que el final de las vacaciones no te quite la sonrisa</h1>
      <p>
        Con nuestros seguros ASISA Dental disfrutas de una amplia asistencia en
        nuestras más de 60 clínicas con más 1.700 especialistas. Y si prefieres
        asegurar también a tu familia, con nuestros seguros ASISA Dental
        Familiar, podrás proteger la sonrisa de hasta 4 familiares.
      </p>
      <p>
        Todo, por un precio único, con hasta un 15% de descuento en la prima e
        incluyendo un gran número de tratamientos y la más alta tecnología. Solo
        si lo contratas antes del 30 de septiembre. Además, gracias a esta
        promoción también disfrutarás de un 10% descuento en tratamientos y un
        blanqueamiento dental gratis** en nuestras clínicas propias, bajo
        prescripción facultativa.
      </p>
      <i>
        <small>Consulta condiciones</small>
      </i>
    </div>
  );
}
