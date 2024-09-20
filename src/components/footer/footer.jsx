import { useTranslation } from "react-i18next";
import Group from "../group/group";
import Header from "../header/header";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Header style={{ backgroundColor: "inherit", color: "inherit" }} />
      <Group justify="space-between" align="center" wrap="wrap">
        <p>{t("footer.copyright")}</p>
        <Group>
          <a href="/aviso-legal">{t("footer.legal")}</a>
          <a href="/politica-de-cookies">{t("footer.cookies")}</a>
          <a href="/politica-de-proteccion-de-datos">{t("footer.lopd")}</a>
        </Group>
      </Group>
    </footer>
  );
}
