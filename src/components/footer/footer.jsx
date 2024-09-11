import Group from "../group/group";
import Header from "../header/header";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Header style={{ backgroundColor: "inherit", color: "inherit" }} />
      <Group justify="space-between" align="center" wrap="wrap">
        <p>© Todos los derechos reservados.</p>
        <Group>
          <a href="/legal">Legal</a>
          <a href="/cookies">Cookies</a>
          <a href="/tos">Condiciones</a>
        </Group>
      </Group>
    </footer>
  );
}
