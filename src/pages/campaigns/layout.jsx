import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ContactForm from "../../components/contact-form/contact-form";
import "./campaigns.css";

// eslint-disable-next-line react/prop-types
export default function LayoutCampaigns({ children }) {
  const [headerHeight, setHeaderHeight] = React.useState(134);
  return (
    <>
      {" "}
      <Header
        style={{
          paddingInline: "var(--spacing)",
        }}
        setHeight={setHeaderHeight}
      />
      <div
        style={{
          backgroundColor: "var(--primary)",
          paddingBlockStart: headerHeight + "px",
          marginBlockStart: "-" + headerHeight + "px",
        }}
      ></div>
      <div style={{ margin: "var(--spacing)" }} className="campaigns">
        {children}
        <h2 style={{ textAlign: "center" }}>¡Contacta con nosotros!</h2>
        <ContactForm style={{ maxWidth: 600, marginInline: "auto" }} />
      </div>
      <Footer />
    </>
  );
}
