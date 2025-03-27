export default function AsisaOcaso() {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/campaigns/asisa-decesos.jpg"
        />
        <img
          src="/campaigns/asisa-decesos-mobile.jpg"
          style={{ width: "100%" }}
        />
      </picture>
      <h1>
        Con tu seguro Decesos OCASO, podrás cuidar de ti y de los tuyos con un
        servicio sobresaliente, que cubre los gastos en caso de fallecimiento.
      </h1>
      <p>
        Ahora te damos 6 meses de Decesos OCASO GRATIS* contratando tu seguro
        salud o teniendo una poliza de salud*. Esta promoción finaliza el 31 de
        diciembre! + información* en tu agencia Asisa Denia, tel.{" "}
        <a href="tel:+34637049244">637 04 92 44</a>
      </p>
      <p>Con este producto tendrás cubiertas las siguientes garantías:</p>
      <ul>
        <li>
          Asistencia en decesos. Cubre los costes de los servicios funerarios
          pactados y la libre elección del cementerio y tanatorio, además de la
          tramitación de certificados y pensiones.
        </li>
        <li>Asistencia en traslado nacional e internacional.</li>
        <li>Asistencia en viaje en España y en el extranjero.</li>
        <li>Asesoramiento legal y abogado de familia.</li>
        <li>Asistencia jurídica especializada en menores.</li>
        <li>Testamento Online.</li>
        <li>Accidentes.</li>
      </ul>
      <p></p>
      <i>
        <small>Consulta condiciones</small>
      </i>
    </div>
  );
}
