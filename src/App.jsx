import React from "react";
import "./App.css";
import "./components/accordion/accordion.css";
import Header from "./components/header/header";
import Group from "./components/group/group";
import Button from "./components/button/button";
import {
  CaretDown,
  Heart,
  PaperPlaneTilt,
  Quotes,
  Star,
  WhatsappLogo,
  Question,
  Envelope,
} from "@phosphor-icons/react";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import * as Accordion from "@radix-ui/react-accordion";
import Avatar from "./components/avatar/avatar";
import EmblaCarousel from "./components/carousel/embla/embla-carousel";
import Insurance from "./components/insurance/insurance";

function App() {
  const [headerHeight, setHeaderHeight] = React.useState(121);
  function range(length) {
    return new Array(length).fill(0);
  }
  const avatars = [
    {
      src: "https://picsum.photos/900/600",
      alt: "MariaAngelesParreno",
      name: "Maria Angeles Parreno",
      position: "CEO",
    },
    {
      src: "https://picsum.photos/900/600",
      alt: "Rosa",
      name: "Rosa",
      position: "Atencion al cliente",
    },
  ];
  const opinions = [
    {
      value: `Cuando surgen los problemas es cuando se necesitan profesionales de verdad, y Ma Angeles y su equipo están a la altura de cualquiera que sean las circunstancias tanto profesionalmente como personalmente llevando la empatía y la profesionalidad de la mano en todos sus servicios. El valor añadido a cualquier trabajo es sin duda la calidad de las personas.`,
      time: "Hace dos años",
      stars: 5,
    },
    {
      value: `HOla soy otroCuando surgen los problemas es cuando se necesitan profesionales de verdad, y Ma Angeles y su equipo están a la altura de cualquiera que sean las circunstancias tanto profesionalmente como personalmente llevando la empatía y la profesionalidad de la mano en todos sus servicios. El valor añadido a cualquier trabajo es sin duda la calidad de las personas.`,
      time: "Hace dos años",
      stars: 5,
    },
  ];

  const faq = [
    {
      question: "¿Qué ventajas tiene contratar ASISA para tu seguro de salud?",
      answer:
        "Los seguros ASISA tienen todas las coberturas sanitarias, podrás ir al especialista sin pasar por el médico de cabecera, sin esperas y todos los días del año. Tendrás servicios como telemedicina, apoyo psicoemocional y el club ASISA con grandes beneficios.",
    },
    {
      question: "¿Cómo contratar un seguro de salud de ASISA?",
      answer:
        "Puedes contratar tu seguro llamando o enviándonos un whatsapp y nos pondremos en contacto contigo para darle más información.",
      cta: {
        link: "",
        value: (
          <Group gap="xs">
            <span>Contacta con nosotros</span>
            <WhatsappLogo size={24} />
          </Group>
        ),
      },
    },
    {
      question: "¿Qué son los seguros con copago y sin copago?",
      answer:
        "Los seguros con copago son aquellos con una prima baja, pero con los que debes abonar una cantidad por el uso de ciertos servicios. Con los seguros sin copago, pagarás la misma mensualidad, sin importar el uso que le des al seguro.",
    },
    {
      question: "¿Cuáles son los periodos de carencia más habituales?",
      answer:
        "Generalmente, el periodo de carencia es de 6 meses, salvo para la hospitalización y el parto que tienen una carencia de 8 meses.",
    },
    {
      question:
        "¿Qué servicios no necesitan autorización de ASISA? ¿Y cuáles necesitan de la autorización?",
      answer:
        "Puedes acceder a ciertos servicios sin necesidad de una autorización de la compañía: análisis clínicos, audiometría, arteriografía, citología, colposcopia, consulta médica, coombs directo, densitometría ósea, Doppler o eco-doppler, ecocardiograma, ecografías, electrocardiograma, electroencefalograma, electromiograma, estudio de la pisada, ergometría, holter, limpieza de boca, mamografía, preparación al parto, preoperatorio, radiografías simples, urografía, etc.",
    },
    {
      question: "¿Cómo es el cuadro médico de ASISA?",
      answer:
        "El asegurado tiene derecho a la libre elección de médicos de entre los que figuran en la lista de facultativos de la entidad, que cuenta con una amplia variedad de hospitales y de centros de salud propios y más de un millar de centros concertados. En caso de querer acudir a un profesional que no se encuentra en el cuadro médico, podrás contratar tu seguro de reembolso y elegir con total libertad.",
    },
  ];
  const benefits = [
    {
      icon: <Heart size={96} stroke="0.8" color="var(--primary)" />,
      title: "La confianza de más de 50 años de experiencia",
      value:
        "Líderes en el sector, ya que reinvertimos los beneficios en mejorar la asistencia y la innovación tecnológica.",
    },
    {
      icon: <Heart size={96} stroke="0.8" color="var(--primary)" />,
      title: "La confianza de más de 50 años de experiencia",
      value:
        "Líderes en el sector, ya que reinvertimos los beneficios en mejorar la asistencia y la innovación tecnológica.",
    },
    {
      icon: <Heart size={96} stroke="0.8" color="var(--primary)" />,
      title: "La confianza de más de 50 años de experiencia",
      value:
        "Líderes en el sector, ya que reinvertimos los beneficios en mejorar la asistencia y la innovación tecnológica.",
    },
    {
      icon: <Heart size={96} stroke="0.8" color="var(--primary)" />,
      title: "La confianza de más de 50 años de experiencia",
      value:
        "Líderes en el sector, ya que reinvertimos los beneficios en mejorar la asistencia y la innovación tecnológica.",
    },
    {
      icon: <Heart size={96} stroke="0.8" color="var(--primary)" />,
      title: "La confianza de más de 50 años de experiencia",
      value:
        "Líderes en el sector, ya que reinvertimos los beneficios en mejorar la asistencia y la innovación tecnológica.",
    },
  ];
  return (
    <>
      <Header
        style={{
          paddingInline: "var(--spacing)",
        }}
        setHeight={setHeaderHeight}
      />
      <section
        style={{
          paddingInline: "var(--spacing)",
          paddingBlockEnd: "var(--spacing)",
          background: "var(--primary-gradient)",
          color: "var(--background)",
          minHeight: "90svh",
          display: "flex",
          flexDirection: "column",
          paddingBlockStart: headerHeight + "px",
          marginBlockStart: "-" + headerHeight + "px",
        }}
      >
        <EmblaCarousel
          style={{ display: "flex", alignItems: "center", flexGrow: 1 }}
        >
          <Grid>
            <Group flexDirection="column" align="flex-start" justify="center">
              <p style={{ fontSize: "var(--text-lg)", marginBlock: 0 }}>
                Asegurando a las familias de Dénia desde hace más de 20 años
              </p>
              <p
                style={{
                  fontSize: "var(--text-xxl)",
                  fontFamily: "var(--text-title)",
                  marginBlock: "1em",
                }}
              >
                Tu aseguradora de confianza en Dénia desde hace más de 20 años.
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
            <img src="https://picsum.photos/900/600" className="with-border" />
          </Grid>
        </EmblaCarousel>
      </section>
      <section className="section">
        <p className="section_title">Siempre a tu lado, estés donde estés</p>
        <Grid style={{ gap: "var(--xxl)" }}>
          <img src="https://picsum.photos/900/600" className="with-border" />
          <Group flexDirection="column" align="flex-start">
            <p>
              En nuestra aseguradora, con décadas de experiencia, ponemos a
              nuestros clientes en el centro de todo lo que hacemos. Nos
              enorgullece ofrecer un servicio cercano y personalizado, brindando
              la confianza y tranquilidad que necesitas. Estamos aquí para ti,
              siempre.
            </p>
            <p>
              Visítanos en <b>Calle Sandunga 51, Dénia</b> o contáctanos
              directamente a través de nuestro formulario web para recibir la
              atención personalizada que mereces. ¡Estamos aquí para ayudarte!
            </p>
            <Group
              style={{ marginBlockStart: "auto", paddingBlockEnd: "var(--md)" }}
            >
              <Button>
                <Group>
                  <span>Contacta con nosotros</span>
                  <PaperPlaneTilt size={24} />
                </Group>
              </Button>
              <Button variant="secondary">
                <Group>
                  <span>Envíanos un mensaje</span>
                  <WhatsappLogo size={24} />
                </Group>
              </Button>
            </Group>
          </Group>
        </Grid>
      </section>
      <section className="section section_secondary">
        <p className="section_title">Por qué confiar en nosotros</p>
        <Group justify="center" gap="xxl">
          {benefits.map((b, i) => (
            <Card key={i}>
              {b.icon}
              <Card.Title value={b.title} />
              <Card.Content value={b.value} />
            </Card>
          ))}
        </Group>
      </section>
      <section className="section">
        <p className="section_title">Lo que dicen nuestros clientes</p>
        <Group justify="space-between">
          <Group>
            <span
              style={{
                fontFamily: "var(--text-title)",
                fontSize: "var(--text-xl)",
                fontWeight: 700,
              }}
            >
              5,0
            </span>
            <Group gap="0">
              <Star weight="fill" color="var(--accent)" />
              <Star weight="fill" color="var(--accent)" />
              <Star weight="fill" color="var(--accent)" />
              <Star weight="fill" color="var(--accent)" />
              <Star weight="fill" color="var(--accent)" />
            </Group>
          </Group>
          <Button variant="secondary">
            <Group>
              <span>Escribir una reseña</span>
              <PaperPlaneTilt />
            </Group>
          </Button>
        </Group>
        <div
          className="carousel_wrapper"
          style={{
            padding: "64px var(--xl)",
            background: "var(--primary-gradient)",
            color: "var(--background)",
            marginBlockStart: "var(--md)",
            borderRadius: 8,
            border: "2px solid var(--background-5)",
            boxShadow: "0 2px 4px 0 #060f1c2a",
          }}
        >
          <Quotes
            size={48}
            weight="fill"
            color="var(--background-overlay)"
            style={{ transform: "rotate(180deg)" }}
          />
          <Grid>
            <EmblaCarousel>
              {opinions.map((opinion) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--md)",
                  }}
                  key={opinion.value}
                >
                  <p
                    style={{
                      fontSize: "var(--text-l)",
                      lineHeight: "28px",
                      letterSpacing: "0.1px",
                    }}
                  >
                    {opinion.value}
                  </p>
                  <hr
                    style={{
                      width: 66,
                      background: "var(--background-overlay)",
                      height: 3,
                      borderRadius: 999,
                      margin: 0,
                      border: "none",
                    }}
                  />
                  <Group>
                    <p>{opinion.time}</p>
                    <Group gap="0">
                      {range(opinion.stars).map((r, i) => (
                        <Star
                          key={i}
                          size={12}
                          weight="fill"
                          color="var(--accent)"
                        />
                      ))}
                    </Group>
                  </Group>
                </div>
              ))}
            </EmblaCarousel>
            <img
              src="https://picsum.photos/900/600"
              className="with-border"
              style={{
                maxWidth: 500,
                marginInlineStart: "auto",
              }}
            ></img>
          </Grid>
        </div>
      </section>
      <section className="section">
        <p className="section_title">Elige tu seguro</p>
        <p className="section_subtitle">
          En Agencia ASISA Dénia te ofrecemos una gran variedad de seguros con
          todas las coberturas que necesitas para ti y para tu familia
        </p>
        <Insurance />
      </section>
      <section className="section section_secondary">
        <p className="section_title">
          Preguntas frecuentes de los seguros ASISA Salud
        </p>
        <Accordion.Root
          type="single"
          className="Accordion"
          defaultValue={faq[0].question}
        >
          {faq.map((faq) => (
            <Accordion.Item
              key={faq.question}
              value={faq.question}
              className="AccordionItem"
            >
              <Accordion.Header className="AccordionHeader">
                <Accordion.Trigger className="AccordionTrigger">
                  <Question />
                  <span>{faq.question}</span>
                  <CaretDown className="AccordionTriggerIcon" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent">
                <p>{faq.answer}</p>
                {faq.cta && <Button>{faq.cta.value}</Button>}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
      <section className="section">
        <p className="section_title">Conoce al equipo</p>
        <p className="section_subtitle">
          Con una experiencia combinada de más de 40 años, sabes que estás en
          buenas manos.
        </p>
        <Group justify="center" style={{ marginBlock: "var(--xl)" }}>
          {avatars.map((avatar) => (
            <Avatar key={avatar.name} {...avatar} />
          ))}
        </Group>
      </section>
      <section className="section section_secondary">
        <p className="section_title">¿Quedamos?</p>
        <p className="section_subtitle">
          En ASISA Dénia siempre estamos disponibles para ti ofreciéndote
          diferentes canales para contactar con nosotros.
        </p>
        <Grid>
          <div style={{ height: "fit-content" }}>
            <img src="https://picsum.photos/900/600" className="with-border" />
            <Button variant="transparent">
              <Group>
                <WhatsappLogo size={24} color="var(--accent)" />
                <span>+34637049244</span>
              </Group>
            </Button>
            <Button variant="transparent">
              <Group>
                <Envelope size={24} color="var(--accent)" />
                <span>maparreno@asisa.es</span>
              </Group>
            </Button>
          </div>
          <form className="form">
            <div className="input-field">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="input-field">
              <label htmlFor="subject">¿Cuál es tu pregunta?</label>
              <textarea
                name="subject"
                id="subject"
                defaultValue="Me gustaría recibir información acerca de los seguros que puede ofrecerme ASISA."
                rows="5"
              ></textarea>
            </div>
            <Button>Contacta con nosotros</Button>
          </form>
        </Grid>
      </section>
    </>
  );
}

export default App;
