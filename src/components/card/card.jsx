/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 300,
        textAlign: "center",
        gap: "var(--sm)",
      }}
    >
      {children}
    </div>
  );
}
function CardTitle({ value }) {
  return (
    <p
      style={{
        color: "var(--primary)",
        fontWeight: "600",
        margin: 0,
        textWrap: "pretty",
      }}
    >
      {value}
    </p>
  );
}
function CardContent({ value }) {
  return (
    <p
      className="card_content"
      style={{
        color: "var(--text)",
        margin: 0,
        textWrap: "balance",
      }}
    >
      {value}
    </p>
  );
}

Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;
