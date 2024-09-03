import Button from "../button/button";
import Group from "../group/group";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function Insurance() {
  return (
    <div className="insurance">
      <div className="accent_cta">
        <p>Chat médico y videoconsultas incluidas</p>
      </div>
      <div className="container">
        <div className="header">
          <p className="title"></p>
          <p className="description"></p>
          <div className="price_container"></div>
          <p className="variant"></p>
        </div>
        <div className="coverages">
          <p className="coverage_title">Coberturas del seguro médico</p>
          <ul className="coverage_list">
            <li className="coverage_item">
              <div className="icon included"></div>
              <p>Consultas en medicina primaria y especializada</p>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Button>
            <Group gap="sm">
              <span>Contrata tu seguro</span>
              <PaperPlaneTilt />
            </Group>
          </Button>
        </div>
      </div>
    </div>
  );
}
