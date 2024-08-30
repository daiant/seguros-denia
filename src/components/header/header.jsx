import PropTypes from "prop-types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Group from "../group/group";

export default function Header({ hideContact }) {
  return (
    <NavigationMenu.Root>
      {!hideContact && (
        <NavigationMenu.List
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Group justify="flex-start">
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">
                Calle Sandunga 51, Dénia
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">+34637049244</NavigationMenu.Link>
            </NavigationMenu.Item>
          </Group>
          <Group>
            <p>Spanish</p>
            <p>English</p>
            <p>Instagram</p>
            <p>Linkedin</p>
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
        <div>
          <p>Agencia ASISA Dénia</p>
          <p>Agente exclusivo ASISA</p>
        </div>
        <Group>
          <div>
            <span>Corason</span>
            <a>Seguros</a>
          </div>
          <div>
            <span>Corason</span>
            <a>Seguros</a>
          </div>
          <div>
            <span>Corason</span>
            <a>Contacta</a>
          </div>
        </Group>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

Header.propTypes = {
  hideContact: PropTypes.bool,
};
