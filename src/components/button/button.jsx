import "./button.css";
// eslint-disable-next-line react/prop-types
export default function Button({ variant = "primary", onClick, children }) {
  return (
    <button onClick={onClick} className={["button", variant].join(" ")}>
      {children}
    </button>
  );
}
