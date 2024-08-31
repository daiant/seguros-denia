// eslint-disable-next-line react/prop-types
export default function Grid({ children, style }) {
  return (
    <div
      style={{
        flexGrow: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "var(--xl)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
