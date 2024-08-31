/* eslint-disable react/prop-types */
export default function Group({
  children,
  align = "center",
  justify = "initial",
  gap = "md",
  wrap = "wrap",
  flexDirection = "row",
  className,
  style = {},
}) {
  function getGap() {
    return `var(--${gap}, ${gap})`;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: wrap,
        alignItems: align,
        justifyContent: justify,
        flexDirection: flexDirection,
        gap: getGap(),
        ...style,
      }}
      className={className ?? ""}
    >
      {children}
    </div>
  );
}
