/* eslint-disable react/prop-types */
import React from "react";
import Button from "../button/button";
import Group from "../group/group";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import "./insurance.css";
import { insuranceList, insuranceListIndex } from "./insurance.db";
import { Check, X } from "@phosphor-icons/react";
import { constants } from "../../constants";

export default function Insurance() {
  const [form, setForm] = React.useReducer(
    (state, action) => ({
      insurance: action.insurance ?? state.insurance,
      target: action.target ?? state.target,
    }),
    {
      insurance: "life",
      target: "myself",
    }
  );

  function getInsuranceListItems() {
    return insuranceListIndex[form.insurance][form.target];
  }
  return (
    <div className="insurance-wrapper">
      <InsuranceForm form={form} onChange={setForm} />
      <ul>
        {getInsuranceListItems().map((insuranceIndex) => {
          const insurance = insuranceList.find((i) => i.id === insuranceIndex);
          return <InsuranceItem item={insurance} key={insurance.title} />;
        })}
      </ul>
    </div>
  );
}

export function InsuranceForm({ form, onChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="insurance-form">
      <p>Busco</p>
      <select
        name="insurance"
        id="insurance"
        value={form.insurance}
        onChange={(e) => onChange({ insurance: e.target.value })}
      >
        <option value="health">un seguro de salud</option>
        <option value="life">un seguro de vida</option>
        <option value="dental">un seguro dental</option>
        <option value="accidents">un seguro de accidentes</option>
        <option value="hospitalization">un seguro de hospitalización</option>
        <option value="passing">un seguro de decesos</option>
        <option value="pets">un seguro de mascotas</option>
        <option value="travel">un seguro de viaje</option>
      </select>
      <p>para</p>
      <select
        name="target"
        id="target"
        value={form.target}
        onChange={(e) => onChange({ target: e.target.value })}
      >
        <option value="myself">mí</option>
        <option value="family">mi familia</option>
        <option value="children">mi hija/o</option>
        <option value="other">otra persona</option>
      </select>
      <Button variant="accent">
        <p>Encontrar seguros</p>
      </Button>
    </form>
  );
}

export function InsuranceItem({ item }) {
  const getIcon = (icon) => {
    const classList = ["icon", icon].join(" ");
    switch (icon) {
      case "covered":
        return <Check className={classList} />;
      case "not-covered":
        return <X className={classList} />;
      default:
        return <Check className={classList} />;
    }
  };
  if (!item) return <li className="insurance"></li>;
  return (
    <li className="insurance">
      <div className="accent_cta">
        <p>Chat médico y videoconsultas incluidas</p>
      </div>
      <div className="container">
        <div className="header">
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
          <p className="price_container_title">precio desde</p>
          <div className="price_container">
            <p className="price_euros">{item.price[0]}</p>
            <p className="price_cents">
              , {String(item.price[1]).padStart(2, "0")}
            </p>
            <p>€/{item.subtitle_price ?? "mes"}</p>
          </div>
          {item.variant && <p className="variant">{item.variant}</p>}
        </div>
        <div className="coverages">
          {item.coverages.length > 0 && (
            <p className="coverage_title">Coberturas del seguro médico</p>
          )}
          <ul className="coverage_list">
            {item.coverages?.map((coverage) => (
              <li className="coverage_item" key={coverage.name}>
                {getIcon(coverage.icon)}

                <p>{coverage.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="insurance-footer">
          <Button href={constants.sections.contacta.target}>
            <Group gap="sm">
              <span>Contrata tu seguro</span>
              <PaperPlaneTilt />
            </Group>
          </Button>
        </div>
      </div>
    </li>
  );
}
