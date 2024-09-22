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
import { handleSubmit } from "./lib/form/form.utils";
import { Trans } from "react-i18next";
import { useCustomTranslation } from "./lib/useDefaultLanguage";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function App() {
  const { t } = useCustomTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [headerHeight, setHeaderHeight] = React.useState(121);
  const [loading, setLoading] = React.useState(false);

  function range(length) {
    return new Array(length).fill(0);
  }
  const avatars = [
    {
      src: "https://picsum.photos/900/600",
      alt: "MariaAngelesParreno",
      name: "Maria Angeles Parreno",
      position: t("avatars.ceo"),
    },
    {
      src: "https://picsum.photos/900/600",
      alt: "Rosa",
      name: "Rosa",
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
            <Group
              flexDirection="column"
              align="flex-start"
              justify="center"
              style={{ paddingBlock: "32px 16px" }}
            >
              <p style={{ fontSize: "var(--text-lg)", marginBlock: 0 }}>
                {t("hero.subtitle")}
              </p>
              <p
                style={{
                  fontSize: "var(--text-xxl)",
                  fontFamily: "var(--text-title)",
                }}
              >
                {t("hero.heading")}
              </p>
              <Group>
                <Button
                  variant="secondary"
                  href={constants.sections.seguros.target}
                >
                  <Group gap="sm">
                    <span>{t("common.choose_insurance")}</span>
                    <PaperPlaneTilt />
                  </Group>
                </Button>
                <Button
                  variant="accent"
                  href={constants.sections.contacta.target}
                >
                  <Group gap="sm">
                    <span>{t("common.contact")}</span>
                    <WhatsappLogo />
                  </Group>
                </Button>
              </Group>
            </Group>
            <img
              src="https://picsum.photos/900/600"
              className="with-border"
              style={{ height: "unset" }}
            />
          </Grid>
        </EmblaCarousel>
      </section>
      <section className="section">
        <p className="section_title">{t("about_us.title")}</p>
        <Grid style={{ gap: "var(--xxl)" }}>
          <img src="https://picsum.photos/900/600" className="with-border" />
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
        <p className="section_title">{t("benefits.title")}</p>
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
        <p className="section_title">{t("opinions.title")}</p>
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
      <section className="section" id={constants.sections.seguros.value}>
        <p className="section_title">{t("common.choose_insurance")}</p>
        <p className="section_subtitle">{t("insurance_form.subtitle")}</p>
        <Insurance />
      </section>
      <section className="section section_secondary">
        <p className="section_title">{t("faq.title")}</p>
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
        <p className="section_title">{t("team.title")}</p>
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
        <p className="section_title">{t("contact.title")}</p>
        <p className="section_subtitle">{t("contact.subtitle")}</p>
        <Grid>
          <div style={{ height: "fit-content" }}>
            <img src="https://picsum.photos/900/600" className="with-border" />
            <Button
              variant="transparent"
              href={constants.whatsapp}
              style={{ display: "block", width: "fit-content" }}
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
          <form
            className="form"
            onSubmit={(e) =>
              handleSubmit(e, executeRecaptcha, setLoading(false))
            }
          >
            <div className="input-field">
              <label htmlFor="name">{t("contact.name")}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-field">
              <label htmlFor="phone">{t("contact.phone")}</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="input-field">
              <label htmlFor="subject">{t("contact.subject")}</label>
              <textarea
                name="subject"
                id="subject"
                defaultValue={t("contact.subject_default")}
                rows="5"
              ></textarea>
            </div>
            <Button type="submit" loading={loading}>
              {t("common.contact")}
            </Button>
          </form>
        </Grid>
      </section>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
