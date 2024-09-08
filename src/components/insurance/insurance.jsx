/* eslint-disable react/prop-types */
import React from "react";
import Button from "../button/button";
import Group from "../group/group";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import "./insurance.css";
import { insuranceList } from "./insurance.db";
import { Check, X } from "@phosphor-icons/react";

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
  return (
    <div className="insurance-wrapper">
      <InsuranceForm form={form} onChange={setForm} />
      <ul>
        {insuranceList.map((insurance) => (
          <InsuranceItem item={insurance} key={insurance.title} />
        ))}
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
        <option value="life">un seguro de vida</option>
        <option value="health">un seguro de salud</option>
        <option value="car">un seguro de coche</option>
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
            <p>€/mes</p>
          </div>
          <p className="variant">{item.variant}</p>
        </div>
        <div className="coverages">
          <p className="coverage_title">Coberturas del seguro médico</p>
          <ul className="coverage_list">
            {item.coverages?.map((coverage) => (
              <li className="coverage_item" key={coverage.name}>
                {getIcon(coverage.icon)}

                <p>{coverage.name}</p>
              </li>
            ))}
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
    </li>
  );
}
