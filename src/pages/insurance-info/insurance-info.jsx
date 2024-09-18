import React from "react";
import FloatingButton from "../../components/floating-button/floating-button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useSearchParams } from "react-router-dom";
import { insuranceList } from "../../components/insurance/insurance.db";
import Button from "../../components/button/button";
import "./insurance-info.css";
import { handleSubmit } from "../../lib/form/form.utils";

export default function InsuranceInfoPage() {
  const [headerHeight, setHeaderHeight] = React.useState(121);
  const [searchParams] = useSearchParams();
  return (
    <>
      <Header
        style={{
          paddingInline: "var(--spacing)",
        }}
        setHeight={setHeaderHeight}
      />
      <div
        style={{
          backgroundColor: "var(--primary)",
          paddingBlockStart: headerHeight + "px",
          marginBlockStart: "-" + headerHeight + "px",
        }}
      ></div>
      <div style={{ paddingBlockStart: "32px" }}>
        <div style={{ paddingInline: "var(--spacing)" }}>
          <h1
            style={{
              marginBlockEnd: 0,
              maxWidth: 700,
              marginInline: "auto",
              width: "100%",
            }}
          >
            Conoce toda la información de tu seguro
          </h1>
          <p
            style={{
              marginBlockEnd: "1em",
              width: "100%",
              marginInline: "auto",
              maxWidth: 700,
            }}
          >
            La tranquilidad empieza cuando conoces tu futuro. Rellena este
            formulario para que podamos contactar contigo y darte toda la
            información que necesitas. Nuestros asesores podrán guiarte durante
            todo el camino para que puedas contratar tu seguro sin
            complicaciones.
          </p>
        </div>
        <form
          style={{
            padding: "32px var(--spacing) 64px var(--spacing)",
            display: "grid",
          }}
          onSubmit={handleSubmit}
        >
          <fieldset
            style={{
              all: "unset",
              display: "grid",
              gap: "var(--lg)",
              maxWidth: 700,
              width: "100%",
              justifySelf: "center",
            }}
          >
            <div className="input-field">
              <label htmlFor="insurance">
                Seguro del que quieres conocer más
              </label>
              <select
                name="insurance"
                id="insurance"
                defaultValue={searchParams.get("i") ?? 1}
              >
                {insuranceList.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="target">¿Para quién es este seguro?</label>
              <select name="target" id="target">
                <option value="myself">mí</option>
                <option value="family">mi familia</option>
                <option value="children">mi hija/o</option>
                <option value="other">otra persona</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="age">¿Cuántos años tienes?</label>
              <input
                type="number"
                name="age"
                id="age"
                min={18}
                max={110}
                defaultValue={18}
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Tu número de teléfono</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="input-field">
              <label htmlFor="email">Tu correo electrónico</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="input-field">
              <label htmlFor="city">¿Dónde vives actualmente?</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="input-field">
              <label htmlFor="name">Tu nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <Button type="submit" style={{ marginBlockStart: "var(--sm)" }}>
              Enviar
            </Button>
          </fieldset>
        </form>
      </div>
      <Footer />
      <FloatingButton />
    </>
  );
}
