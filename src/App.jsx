import React from "react";
import "./App.css";
import "./components/accordion/accordion.css";
import Header from "./components/header/header";
import Group from "./components/group/group";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import {
  CaretDown,
  Heart,
  PaperPlaneTilt,
  Quotes,
  Star,
  WhatsappLogo,
  Question,
  Envelope,
  SunHorizon,
  FingerprintSimple,
  PersonSimpleCircle,
  UserCircleGear,
} from "@phosphor-icons/react";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import * as Accordion from "@radix-ui/react-accordion";
import Avatar from "./components/avatar/avatar";
import EmblaCarousel from "./components/carousel/embla/embla-carousel";
import Insurance from "./components/insurance/insurance";
import { constants } from "./constants";
import FloatingButton from "./components/floating-button/floating-button";
import { Trans } from "react-i18next";
import { useCustomTranslation } from "./lib/useDefaultLanguage";
import ContactForm from "./components/contact-form/contact-form";

function App() {
  const { t } = useCustomTranslation();
  const [headerHeight, setHeaderHeight] = React.useState(134);

  function range(length) {
    return new Array(length).fill(0);
  }
  const campaigns = [
    {
      src: "/campaigns/asisa-dental-octubre.jpg",
      src_mobile: "/campaigns/asisa-dental-octubre-mobile.jpg",
      alt: "Campaña Dental",
      href: "/campaigns/asisa-dental",
      active: true,
    },
    {
      src: "/campaigns/asisa-decesos.jpg",
      src_mobile: "/campaigns/asisa-decesos-mobile.jpg",
      alt: "Campaña Decesos",
      href: "/campaigns/asisa-ocaso",
      active: true,
    },
    {
      src: "/campaigns/asisa-nuevas-familias.png",
      src_mobile: "/campaigns/asisa-nuevas-familias-mobile.png",
      alt: "Campaña Nuevas Familias",
      href: "/campaigns/asisa-asistencia-veterinaria",
      active: true,
    },
    {
      src: "/campaigns/asisa-vida.png",
      src_mobile: "/campaigns/asisa-vida-mobile.png",
      alt: "Campaña Vida",
      href: "/campaigns/asisa-vuelta-al-cole",
      active: true,
    },
    {
      src: "/campaigns/asisa-general-optica.png",
      src_mobile: "/campaigns/asisa-general-optica-mobile.png",
      alt: "Campaña General Optica",
      href: "/campaigns/asisa-general-optica",
      active: false,
    },
    {
      src: "/campaigns/asisa-international.png",
      src_mobile: "/campaigns/asisa-international-mobile.png",
      alt: "Campaña International",
      href: "/campaigns/asisa-international",
      active: false,
    },
  ];
  const avatars = [
    {
      src: "parreno.webp",
      alt: "MariaAngelesParreno",
      name: "María Ángeles Parreno",
      position: t("avatars.ceo"),
    },
    {
      src: "rosa.webp",
      alt: "Rosa Mª Argudo",
      name: "Rosa Argudo",
      position: t("avatars.customer_service"),
    },
  ];
  const opinions = [
    {
      value: t("opinions.1"),
      name: "Mercè Xicola",
      stars: 5,
    },
    {
      value: t("opinions.2"),
      name: "Pau",
      stars: 5,
    },
    {
      value: t("opinions.3"),
      name: "Jasmina Llull Vicente",
      stars: 5,
    },
  ];

  const faq = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer"),
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer"),
      cta: {
        link: "",
        value: (
          <Group gap="xs">
            <span>{t("common.contact")}</span>
            <WhatsappLogo size={24} />
          </Group>
        ),
      },
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer"),
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer"),
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer"),
    },
    {
      question: t("faq.6.question"),
      answer: t("faq.6.answer"),
    },
  ];

  const benefits = [
    {
      icon: <SunHorizon size={72} stroke="0.7" color="var(--primary)" />,
      title: t("benefits.1.title"),
      value: t("benefits.1.value"),
    },
    {
      icon: <FingerprintSimple size={72} stroke="0.7" color="var(--primary)" />,
      title: t("benefits.2.title"),
      value: t("benefits.2.value"),
    },
    {
      icon: (
        <PersonSimpleCircle size={72} stroke="0.7" color="var(--primary)" />
      ),
      title: t("benefits.3.title"),
      value: t("benefits.3.value"),
    },
    {
      icon: <Heart size={72} stroke="0.7" color="var(--primary)" />,
      title: t("benefits.4.title"),
      value: t("benefits.4.value"),
    },
    {
      icon: <UserCircleGear size={72} stroke="0.7" color="var(--primary)" />,
      title: t("benefits.5.title"),
      value: t("benefits.5.value"),
    },
  ];

  const HeroBanner = () => (
    <Grid className="banner" width={360}>
      <Group
        flexDirection="column"
        align="flex-start"
        justify="center"
        style={{ paddingBlock: "32px 16px" }}
      >
        <p style={{ fontSize: "var(--text-lg)", marginBlock: 0 }}>
          {t("hero.subtitle")}
        </p>
        <h1
          style={{
            fontSize: "var(--text-xxl)",
            fontFamily: "var(--text-title)",
            fontWeight: "700",
            marginBlock: 0,
          }}
        >
          {t("hero.heading")}
        </h1>
        <Group>
          <Button variant="secondary" href={constants.sections.seguros.target}>
            <Group gap="sm">
              <span>{t("common.choose_insurance")}</span>
              <PaperPlaneTilt />
            </Group>
          </Button>
          <Button variant="accent" href={constants.sections.contacta.target}>
            <Group gap="sm">
              <span>{t("common.contact")}</span>
              <WhatsappLogo />
            </Group>
          </Button>
        </Group>
      </Group>
      <img
        alt="Imagen de las trabajadoras de Seguros Denia"
        src="/home.webp"
        className="with-border aspect-ratio"
        width={900}
        height={600}
        style={{ height: "unset" }}
      />
    </Grid>
  );

  const CampaignsCarousel = () => {
    return (
      <>
        {campaigns
          .filter((c) => c.active)
          .map((campaign) => (
            <div
              key={campaign.alt}
              style={{
                display: "grid",
                alignItems: "center",
              }}
            >
              <a href={campaign.href} aria-label={campaigns.alt}>
                <picture>
                  <source media="(min-width: 768px)" srcSet={campaign.src} />
                  <img
                    src={campaign.src_mobile}
                    style={{ width: "100%" }}
                    alt={campaign.alt}
                  />
                </picture>
              </a>
            </div>
          ))}
      </>
    );
  };
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
        <HeroBanner />
      </section>
      <div style={{ padding: 16 }}>
        <EmblaCarousel
          theme="dark"
          style={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            flexDirection: "column",
            paddingBlock: "2rem",
          }}
        >
          <CampaignsCarousel />
        </EmblaCarousel>
      </div>
      <section className="section">
        <h2 className="section_title">{t("about_us.title")}</h2>
        <Grid style={{ gap: "var(--xxl)" }}>
          <img
            src="store.webp"
            className="with-border"
            alt="Imagen del local de Seguros Dénia"
          />
          <Group flexDirection="column" align="flex-start">
            <p>{t("about_us.p1")}</p>
            <p>
              <Trans
                i18nKey="about_us.p2"
                components={{ strong: <strong /> }}
              />
            </p>
            <Group
              style={{ marginBlockStart: "auto", paddingBlockEnd: "var(--md)" }}
            >
              <Button href={constants.sections.contacta.target}>
                <Group>
                  <span>{t("common.contact")}</span>
                  <PaperPlaneTilt size={24} />
                </Group>
              </Button>
              <Button
                variant="secondary"
                href={constants.whatsapp}
                target="_blank"
              >
                <Group>
                  <span>{t("common.whatsapp")}</span>
                  <WhatsappLogo size={24} />
                </Group>
              </Button>
            </Group>
          </Group>
        </Grid>
      </section>
      <section className="section section_secondary">
        <h2 className="section_title">{t("benefits.title")}</h2>
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
        <h2 className="section_title">{t("opinions.title")}</h2>
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
          <Button variant="secondary" href={constants.maps} target="_blank">
            <Group>
              <span>{t("opinions.cta")}</span>
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
                    padding: "var(--md)",
                    userSelect: "none",
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
                    <p>{opinion.name}</p>
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
              alt="Persona sonriendo en una cafeterías"
              src="/people-opinions.webp"
              className="with-border"
              style={{
                maxWidth: 500,
                marginInlineStart: "auto",
              }}
            ></img>
          </Grid>
        </div>
      </section>
      <section className="section" id={constants.sections.seguros.value}>
        <h2 className="section_title">{t("common.choose_insurance")}</h2>
        <p className="section_subtitle">{t("insurance_form.subtitle")}</p>
        <Insurance />
      </section>
      <section className="section section_secondary">
        <h2 className="section_title">{t("faq.title")}</h2>
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
        <h2 className="section_title">{t("team.title")}</h2>
        <p className="section_subtitle">{t("team.subtitle")}</p>
        <Group justify="center" style={{ marginBlock: "var(--xl)" }}>
          {avatars.map((avatar) => (
            <Avatar key={avatar.name} {...avatar} />
          ))}
        </Group>
      </section>
      <section
        className="section section_secondary"
        id={constants.sections.contacta.value}
      >
        <h2 className="section_title">{t("contact.title")}</h2>
        <p className="section_subtitle">{t("contact.subtitle")}</p>
        <Grid width={350}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="with-border" style={{ flexGrow: 1 }}>
              <iframe
                title="Ubicación Seguros Dénia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6215.4285685014!2d0.09731059539901543!3d38.83900379377831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b480252a6c9%3A0xce13009f62355e46!2sAtenci%C3%B3n%20Comercial%20y%20al%20Cliente%20ASISA%20Seguros%20Denia!5e0!3m2!1ses!2ses!4v1727512330747!5m2!1ses!2ses"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: 400,
                }}
              ></iframe>
            </div>
            <Button
              variant="transparent"
              href={constants.whatsapp}
              style={{
                display: "block",
                width: "fit-content",
                marginBlockStart: "0.5rem",
              }}
            >
              <Group>
                <WhatsappLogo size={24} color="var(--accent)" />
                <span>+34637049244</span>
              </Group>
            </Button>
            <Button
              variant="transparent"
              href={constants.mail}
              style={{ display: "block", width: "fit-content" }}
            >
              <Group>
                <Envelope size={24} color="var(--accent)" />
                <span>maparreno@asisa.es</span>
              </Group>
            </Button>
          </div>
          <ContactForm />
        </Grid>
      </section>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
