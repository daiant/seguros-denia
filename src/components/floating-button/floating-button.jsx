import { constants } from "../../constants";
import "./floating-button.css";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingButton() {
  return (
    <a
      className="floating-button"
      href={constants.whatsapp}
      target="_blank"
      aria-label="Contactar en Whatsapp"
    >
      <WhatsappLogo size={42} color="var(--background)" />
    </a>
  );
}
