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

// eslint-disable-next-line react/prop-types
export default function Header({ hideContact, style = {}, setHeight }) {
  const [threshold, setThreshold] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setThreshold(window.scrollY > 0);
    window.addEventListener("load", () => {
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
  return (
    <NavigationMenu.Root
      style={{
        ...style,
        transition: threshold
          ? "300ms cubic-bezier(0.87, 0, 0.13, 1)"
          : "0ms linear",
        backgroundColor: threshold ? "var(--background)" : "transparent",
        color: threshold ? "var(--foreground)" : "var(--background)",
        position: threshold ? "sticky" : "relative",
        top: threshold ? "-32px" : "0px",
        zIndex: 999,
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
              <NavigationMenu.Link href="#" className="underline">
                Calle Sandunga 51, Dénia
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#" className="underline">
                +34637049244
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </Group>
          <Group gap="sm">
            <img
              src="/esp.png"
              alt="Ver página en español"
              title="Ver página en español"
            />
            <img
              src="/en.png"
              alt="See page in English"
              title="See page in English"
            />
            <NavigationMenu.Link href="#" style={{ display: "grid" }}>
              <InstagramLogo size={24} />
            </NavigationMenu.Link>
            <NavigationMenu.Link href="#" style={{ display: "grid" }}>
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
          <p style={{ fontSize: "var(--text-lg)", marginBlock: 0 }}>
            Agencia <b>ASISA</b> Dénia
          </p>
          <p style={{ marginBlock: 0 }}>Agente exclusivo ASISA</p>
        </div>
        <Group>
          <Group gap="xxs" className="item-desktop">
            <HouseSimple size={18} color="var(--accent)" />
            <a href="#" style={{ fontSize: "var(--text-md)" }}>
              Inicio
            </a>
          </Group>
          <Group gap="xxs" className="item-desktop">
            <Heart size={18} color="var(--accent)" />
            <a href="#" style={{ fontSize: "var(--text-md)" }}>
              Seguros
            </a>
          </Group>
          <Button variant="accent">Contacta</Button>
        </Group>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

Header.propTypes = {
  hideContact: PropTypes.bool,
};
