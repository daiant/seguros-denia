import PropTypes from "prop-types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Group from "../group/group";
import "./header.css";
import {
  Heart,
  HouseSimple,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Button from "../button/button";
import React from "react";
import { constants } from "../../constants";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function Header({ hideContact, style = {}, setHeight }) {
  const { t, i18n } = useTranslation();
  const [threshold, setThreshold] = React.useState(false);
  const [isAtHome] = React.useState(() => {
    return globalThis.window.location.pathname === "/";
  });

  React.useEffect(() => {
    const onScroll = () => setThreshold(window.scrollY > 0);
    window.addEventListener("load", () => {
      if (!setHeight) return;
      const height = document
        .querySelector("#navbar")
        .getBoundingClientRect().height;
      setHeight(height);
    });

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setHeight]);

  function changeLanguage(lang) {
    globalThis.localStorage?.setItem("lang", lang);
    i18n.changeLanguage(lang);
  }

  return (
    <NavigationMenu.Root
      style={{
        transition: threshold
          ? "300ms cubic-bezier(0.87, 0, 0.13, 1)"
          : "0ms linear",
        backgroundColor: threshold ? "var(--background)" : "transparent",
        color: threshold ? "var(--foreground)" : "var(--background)",
        position: threshold ? "sticky" : "relative",
        top: threshold ? "-32px" : "0px",
        zIndex: 999,
        ...style,
      }}
      id="navbar"
    >
      {!hideContact && (
        <NavigationMenu.List
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlockStart: "var(--sm)",
          }}
        >
          <Group justify="flex-start">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href={constants.maps}
                target="_blank"
                className="underline"
              >
                Calle Sandunga 51, Dénia
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="item-desktop">
              <NavigationMenu.Link
                href={constants.whatsapp}
                className="underline"
              >
                +34637049244
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </Group>
          <Group gap="sm" style={{ flexWrap: "no-wrap" }}>
            <img
              style={{ cursor: "pointer" }}
              src="/esp.png"
              alt="Ver página en español"
              title="Ver página en español"
              onClick={() => {
                changeLanguage("es");
              }}
            />
            <img
              style={{ cursor: "pointer" }}
              src="/en.png"
              alt="See page in English"
              title="See page in English"
              onClick={() => {
                changeLanguage("en");
              }}
            />
            <NavigationMenu.Link
              href={constants.instagram}
              target="_blank"
              style={{ display: "grid" }}
            >
              <InstagramLogo size={24} />
            </NavigationMenu.Link>
            <NavigationMenu.Link
              href={constants.linkedin}
              target="_blank"
              style={{ display: "grid" }}
            >
              <LinkedinLogo size={24} />
            </NavigationMenu.Link>
          </Group>
        </NavigationMenu.List>
      )}
      <NavigationMenu.List
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginBlock: "var(--md)" }}>
          <Group>
            <div>
              <a
                href="/"
                style={{
                  display: "block",
                  fontSize: "var(--text-lg)",
                  marginBlock: 0,
                }}
              >
                Agencia <b>ASISA</b> Dénia
              </a>
              <a href="/" style={{ display: "block", marginBlock: 0 }}>
                {t("header.title")}
              </a>
            </div>
            <div
              style={{
                height: 70,
                width: 0.5,
                transition: threshold
                  ? "300ms cubic-bezier(0.87, 0, 0.13, 1)"
                  : "0ms linear",
                backgroundColor: threshold
                  ? "var(--primary)"
                  : "var(--background)",
              }}
            ></div>
            <img
              src="/asisa.svg"
              height={32}
              width="auto"
              className="logo"
              style={{
                transition: threshold
                  ? "300ms cubic-bezier(0.87, 0, 0.13, 1)"
                  : "0ms linear",
                filter: threshold
                  ? "brightness(0) saturate(100%) invert(20%) sepia(32%) saturate(3728%) hue-rotate(201deg) brightness(95%) contrast(87%)"
                  : "none",
              }}
            />
          </Group>
        </div>
        <Group className="item-desktop">
          <Group gap="xxs">
            <HouseSimple size={18} color="var(--accent)" />
            <a
              href={isAtHome ? constants.sections.inicio.target : "/"}
              style={{ fontSize: "var(--text-md)" }}
            >
              {t("header.home")}
            </a>
          </Group>
          <Group gap="xxs">
            <Heart size={18} color="var(--accent)" />
            <a
              href={isAtHome ? constants.sections.seguros.target : "/"}
              style={{ fontSize: "var(--text-md)" }}
            >
              {t("header.insurances")}
            </a>
          </Group>
          <Button
            variant="accent"
            href={isAtHome ? constants.sections.contacta.target : "/"}
          >
            {t("header.contact")}
          </Button>
        </Group>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

Header.propTypes = {
  hideContact: PropTypes.bool,
};
