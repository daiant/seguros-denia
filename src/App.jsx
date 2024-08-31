import "./App.css";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <section
        style={{
          paddingInline: "var(--spacing)",
          paddingBlockEnd: "var(--spacing)",
          background: "var(--primary-gradient)",
          color: "var(--background)",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Carousel style={{ flexGrow: 1 }}>
          <Carousel.Item>Charli 1 </Carousel.Item>
          <Carousel.Item>Charli 2</Carousel.Item>
          <Carousel.Item>Charli 3</Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default App;
