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
          <a href="/aviso-legal">Legal</a>
          <a href="/politica-de-cookies">Cookies</a>
          <a href="/politica-de-proteccion-de-datos">Protección de datos</a>
        </Group>
      </Group>
    </footer>
  );
}
