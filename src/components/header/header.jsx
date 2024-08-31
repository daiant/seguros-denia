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

export default function Header({ hideContact }) {
  return (
    <NavigationMenu.Root>
      {!hideContact && (
        <NavigationMenu.List
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBlockStart: "var(--sm)",
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
          <Group gap="2px">
            <HouseSimple size={18} color="var(--accent)" />
            <a href="#" style={{ fontSize: "var(--text-md)" }}>
              Inicio
            </a>
          </Group>
          <Group gap="2px">
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
