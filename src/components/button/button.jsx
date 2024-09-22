/* eslint-disable react/prop-types */
import "./button.css";
import { CircleNotch } from "@phosphor-icons/react";

export default function Button({
  type = "button",
  variant = "primary",
  onClick,
  href,
  target = "_self",
  children,
  loading = false,
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
        <button
          onClick={() => {
            if (loading) return;
            onClick();
          }}
          className={getClassNames()}
          style={style}
          type={type}
        >
          <div className="wrapper" aria-hidden={loading}>
            {children}
          </div>
          <CircleNotch size={24} className="loading" aria-hidden={!loading} />
        </button>
      )}
    </>
  );
  // );
}
