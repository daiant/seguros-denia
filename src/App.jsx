import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <section
        style={{
          paddingInline: "var(--spacing)",
          background: "var(--primary-gradient)",
          color: "var(--background)",
          minHeight: "100svh",
        }}
      >
        <Header />
      </section>
    </>
  );
}

export default App;
