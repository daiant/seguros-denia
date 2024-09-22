/* eslint-disable react/prop-types */
import React from "react";
import Button from "../button/button";
import Group from "../group/group";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import "./insurance.css";
import { insuranceListIndex, loadInsuranceList } from "./insurance.db";
import { Check, X } from "@phosphor-icons/react";
import { constants } from "../../constants";
import { Animate } from "../animate/animate";
import { useTranslation } from "react-i18next";

export default function Insurance() {
  const { t } = useTranslation();
  const [insuranceList, setInsuranceList] = React.useState([]);

  React.useEffect(() => {
    setInsuranceList(loadInsuranceList(t));
  }, [t]);

  const [form, setForm] = React.useReducer(
    (state, action) => ({
      insurance: action.insurance ?? state.insurance,
      target: action.target ?? state.target,
    }),
    {
      insurance: "health",
      target: "myself",
    }
  );

  function getInsuranceListItems() {
    if (!insuranceList.length) return [];

    return insuranceListIndex[form.insurance][form.target];
  }
  return (
    <div className="insurance-wrapper">
      <InsuranceForm form={form} onChange={setForm} />
      <Animate on={form}>
        <ul>
          {getInsuranceListItems().map((insuranceIndex) => {
            const insurance = insuranceList.find(
              (i) => i.id === insuranceIndex
            );
            return <InsuranceItem item={insurance} key={insurance.id} />;
          })}
        </ul>
      </Animate>
      <Group style={{ marginBlockStart: 16 }}>
        <p>
          <small>
            <i>{t("insurance_form.warning")}</i>
          </small>
        </p>
      </Group>
    </div>
  );
}

export function InsuranceForm({ form, onChange }) {
  const { t } = useTranslation();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="insurance-form">
      <p>{t("insurance_form.search")}</p>
      <select
        name="insurance"
        id="insurance"
        value={form.insurance}
        onChange={(e) => onChange({ insurance: e.target.value })}
      >
        <option value="health">{t("insurance_form.options.health")}</option>
        <option value="life">{t("insurance_form.options.life")}</option>
        <option value="dental">{t("insurance_form.options.dental")}</option>
        <option value="accidents">
          {t("insurance_form.options.accidents")}
        </option>
        <option value="hospitalization">
          {t("insurance_form.options.hospitalization")}
        </option>
        <option value="passing">{t("insurance_form.options.passing")}</option>
        <option value="pets">{t("insurance_form.options.pets")}</option>
        <option value="travel">{t("insurance_form.options.travel")}</option>
      </select>
      <p>{t("insurance_form.for")}</p>
      <select
        name="target"
        id="target"
        value={form.target}
        onChange={(e) => onChange({ target: e.target.value })}
      >
        <option value="myself">{t("insurance_form.options.myself")}</option>
        <option value="family">{t("insurance_form.options.family")}</option>
        <option value="children">{t("insurance_form.options.children")}</option>
        <option value="other">{t("insurance_form.options.other")}</option>
      </select>
      <Button variant="accent">
        <p>{t("insurance_form.submit")}</p>
      </Button>
    </form>
  );
}

export function InsuranceItem({ item }) {
  const { t } = useTranslation();
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
        <p>{t("insurance_form.item.title")}</p>
      </div>
      <div className="container">
        <div className="header">
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
          <p className="price_container_title">
            {t("insurance_form.item.price")}
          </p>
          <div className="price_container">
            <p className="price_euros">{item.price[0]}</p>
            <p className="price_cents">
              , {String(item.price[1]).padStart(2, "0")}
            </p>
            <p>€/{item.subtitle_price ?? t("mes")}</p>
          </div>
          {item.variant && <p className="variant">{item.variant}</p>}
        </div>
        <div className="coverages">
          {item.coverages.length > 0 && (
            <p className="coverage_title">
              {t("insurance_form.item.coverages")}
            </p>
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
              <span>{t("insurance_form.cta")}</span>
              <PaperPlaneTilt />
            </Group>
          </Button>
          <a
            href={`/insurance?i=${item.id}`}
            style={{
              fontSize: "var(--text-sm)",
              display: "block",
              textAlign: "center",
              marginBlock: "1em",
              color: "var(--text)",
            }}
          >
            {t("insurance_form.more_info")}
          </a>
        </div>
      </div>
    </li>
  );
}
