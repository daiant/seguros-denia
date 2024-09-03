import Button from "../../button/button";

export default function InsuranceForm() {
  <form onSubmit={(e) => e.preventDefault()}>
    <p>Busco</p>
    <select name="insurance" id="insurance">
      <option value="life">un seguro de vida</option>
      <option value="health">un seguro de salud</option>
      <option value="car">un seguro de coche</option>
    </select>
    <p>para</p>
    <select name="target" id="target">
      <option value="myself">mí</option>
      <option value="family">mi familia</option>
      <option value="children">mi hija/o</option>
      <option value="other">otra persona</option>
    </select>
    <Button variant="accent">
      <p>Encontrar seguros</p>
    </Button>
  </form>;
}
