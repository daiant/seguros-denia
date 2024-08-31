/* eslint-disable react/prop-types */
import "./button.css";

export default function Button({
  variant = "primary",
  onClick,
  children,
  style = {},
}) {
  return (
    <button
      onClick={onClick}
      className={["button", variant].join(" ")}
      style={style}
    >
      {children}
    </button>
  );
}
