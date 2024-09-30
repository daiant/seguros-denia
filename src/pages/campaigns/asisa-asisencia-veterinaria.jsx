export default function VetPage() {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/campaigns/asisa-nuevas-familias.png"
        />
        <img
          src="/campaigns/asisa-nuevas-familias-mobile.png"
          style={{ width: "100%" }}
        />
      </picture>
      <h1>Asistencia veterinaria.</h1>
      <p>
        Accede a todos los servicios veterinarios en cualquier clínica de
        nuestro cuadro: tratamientos preventivos, pruebas diagnósticas,
        cirugías, servicios terapéuticos, etc. Y todo con descuentos medios de
        más del 40% frente a las tarifas de particulares.
      </p>
      <p>
        Además, con el seguro de mascotas de ASISA tendrás incluidas de forma
        totalmente gratuita:
      </p>
      <ul>
        <li>Consultas, revisiones y consultas por urgencia vital</li>
        <li>
          Vacunaciones caninas:
          <ul>
            <li>
              Rabia Tetravalente (moquillo, hepatitis, leptospirosis y
              parvovirosis)
            </li>
            <li>Trivalente (moquillo, hepatitis y leptospirosis)</li>
          </ul>
        </li>
        <li>
          Vacunaciones felinas:
          <ul>
            <li>Trivalente (rinotraqueitis, panleucopenia y calicivirosis)</li>
            <li>
              Leucemia Rabia Tetravalente (rinotraqueitis, panleucopenia,
              calicivirosis y clamidiasis)
            </li>
          </ul>
        </li>
      </ul>
      <p></p>
      <i>
        <small>Consulta condiciones</small>
      </i>
    </div>
  );
}
