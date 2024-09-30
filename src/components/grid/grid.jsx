// eslint-disable-next-line react/prop-types
export default function Grid({ children, style, className, width }) {
  return (
    <div
      className={className}
      style={{
        flexGrow: 1,
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${width ?? 250}px, 1fr))`,
        gap: "var(--xl)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
