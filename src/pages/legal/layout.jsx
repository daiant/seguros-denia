import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./legal.css";

// eslint-disable-next-line react/prop-types
export default function LayoutLegal({ children }) {
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
        className="legal"
        style={{
          backgroundColor: "var(--primary)",
          paddingBlockStart: headerHeight + "px",
          marginBlockStart: "-" + headerHeight + "px",
        }}
      ></div>
      <div style={{ margin: "var(--spacing)" }}>{children}</div>
      <Footer />
    </>
  );
}
