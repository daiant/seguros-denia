/* eslint-disable react/prop-types */
import "./button.css";

export default function Button({
  variant = "primary",
  onClick,
  href,
  target = "_self",
  children,
  style = {},
}) {
  function getClassNames() {
    return ["button", variant].join(" ");
  }
  return (
    <>
      {href && (
        <a
          href={href}
          className={getClassNames()}
          style={style}
          target={target}
        >
          {children}
        </a>
      )}
      {!href && (
        <button onClick={onClick} className={getClassNames()} style={style}>
          {children}
        </button>
      )}
    </>
  );
  // );
}
