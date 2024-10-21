export default function OfertasPromocionesPage() {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/campaigns/ofertas-promociones.png"
        />
        <img
          src="/campaigns/ofertas-promociones-mobile.png"
          style={{ width: "100%" }}
        />
      </picture>
      <h1>Con ASISA, la protección más grande a un precio más pequeño.</h1>
      <p>
        En <b>ASISA</b> queremos protegerte y estar siempre a tu lado. Por eso
        te ofrecemos una amplia gama de productos con los que acompañarte en
        cada fase de tu vida.
      </p>
      <p>
        Además, queremos ofrecerte todos estos productos con las mejores
        condiciones:
      </p>
      <div
        style={{
          borderWidth: "1px 0",
          borderStyle: "solid",
          maxWidth: "800px",
          marginInline: "auto",
          marginBlockStart: "3em",
        }}
      >
        <p>
          <span
            style={{ fontSize: 48, color: "var(--primary)", fontWeight: 500 }}
          >
            30%
          </span>{" "}
          de descuento en <b>Salud y Dental (1)</b>
        </p>
        <p>Contratando además otros dos seguros</p>
      </div>
      <div
        style={{
          borderWidth: "1px 0",
          borderStyle: "solid",
          maxWidth: "800px",
          marginInline: "auto",
        }}
      >
        <p>
          <span
            style={{ fontSize: 48, color: "var(--primary)", fontWeight: 500 }}
          >
            25%
          </span>{" "}
          de descuento si contratas
        </p>
        <p>
          <b>Salud y Dental (2)</b>
        </p>
      </div>
      <div
        style={{
          borderWidth: "1px 0",
          borderStyle: "solid",
          maxWidth: "800px",
          marginInline: "auto",
          marginBlockEnd: "3em",
        }}
      >
        <p>
          <span
            style={{ fontSize: 48, color: "var(--primary)", fontWeight: 500 }}
          >
            20%
          </span>{" "}
          de descuento contratando
        </p>
        <p>
          <b>Salud o Dental (3)</b>
        </p>
      </div>

      <small style={{ display: "block", opacity: 0.8 }}>
        [1] Descuento del 30% durante el primer año de vigencia de la póliza,
        del 25% durante el segundo y del 20% durante el tercero aplicable en los
        productos de salud y dental por la contratación de cuatro o cinco de los
        cinco seguros que entran en la promoción.
      </small>
      <small style={{ display: "block", opacity: 0.8 }}>
        [2] Descuento del 25% durante el primer año de vigencia de la póliza,
        del 20% durante el segundo y del 15% durante el tercero aplicable en los
        productos de salud y dental por la contratación de dos o tres de los
        cinco seguros que entran en la promoción.
      </small>
      <small style={{ display: "block", opacity: 0.8 }}>
        [3] Descuento del 20% durante el primer año de vigencia de la póliza,
        del 15% durante el segundo y del 10% durante el tercero aplicable en los
        productos de salud y dental por la contratación de uno de los cinco
        seguros que entran en la promoción.
      </small>
    </div>
  );
}
