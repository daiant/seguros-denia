import "./App.css";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";
import Group from "./components/group/group";
import Button from "./components/button/button";
import { PaperPlaneTilt, WhatsappLogo } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <section
        style={{
          paddingInline: "var(--spacing)",
          paddingBlockEnd: "var(--spacing)",
          background: "var(--primary-gradient)",
          color: "var(--background)",
          minHeight: "90svh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Carousel style={{ flexGrow: 1 }}>
          <Carousel.Item>
            {/* <Group style={{ width: "100%" }}> */}
            <div
              style={{
                flexGrow: 1,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--xl)",
              }}
            >
              <Group flexDirection="column" align="flex-start">
                <p style={{ fontSize: "var(--text-lg)", marginBlock: 0 }}>
                  Asegurando a las familias de Dénia desde hace más de 20 años
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xxl)",
                    fontFamily: "var(--text-title)",
                  }}
                >
                  Tu aseguradora de confianza en Dénia desde hace más de 20
                  años.
                </p>
                <Group>
                  <Button variant="secondary">
                    <Group gap="sm">
                      <span>Elige tu seguro</span>
                      <PaperPlaneTilt />
                    </Group>
                  </Button>
                  <Button variant="accent">
                    <Group gap="sm">
                      <span>Contacta con nosotros</span>
                      <WhatsappLogo />
                    </Group>
                  </Button>
                </Group>
              </Group>
              <div>
                <img
                  src="https://picsum.photos/900/60g0"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: "5 / 3",
                  }}
                />
              </div>
              {/* </Group> */}
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default App;
