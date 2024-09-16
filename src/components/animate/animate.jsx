/* eslint-disable react/prop-types */
import React from "react";
import "./animate.css";

export function Animate({ children, on }) {
  const [className, setClassName] = React.useState("animate-fade-in");
  const [items, setItems] = React.useState(children);

  React.useEffect(() => {
    setClassName("animate-fade-out");
    setTimeout(() => {
      setClassName("animate-fade-in");
      setItems(children);
    }, 300);
  }, [on, children]);
  return on === undefined ? (
    <div>{items}</div>
  ) : (
    <div className={className} key={on}>
      {items}
    </div>
  );
}
