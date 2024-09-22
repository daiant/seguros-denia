import React from "react";
import FloatingButton from "../../components/floating-button/floating-button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useSearchParams } from "react-router-dom";
import { loadInsuranceList } from "../../components/insurance/insurance.db";
import Button from "../../components/button/button";
import "./insurance-info.css";
import { handleSubmit } from "../../lib/form/form.utils";
import { useCustomTranslation } from "../../lib/useDefaultLanguage";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function InsuranceInfoPage() {
  const { t } = useCustomTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [insuranceList, setInsuranceList] = React.useState([]);

  React.useEffect(() => {
    setInsuranceList(loadInsuranceList(t));
  }, [t]);

  const [headerHeight, setHeaderHeight] = React.useState(121);
  const [searchParams] = useSearchParams();
  return (
    <>
      <Header
        style={{
          paddingInline: "var(--spacing)",
        }}
        setHeight={setHeaderHeight}
      />
      <div
        style={{
          backgroundColor: "var(--primary)",
          paddingBlockStart: headerHeight + "px",
          marginBlockStart: "-" + headerHeight + "px",
        }}
      ></div>
      <div style={{ paddingBlockStart: "32px" }}>
        <div style={{ paddingInline: "var(--spacing)" }}>
          <h1
            style={{
              marginBlockEnd: 0,
              maxWidth: 700,
              marginInline: "auto",
              width: "100%",
            }}
          >
            {t("insurance_info.title")}
          </h1>
          <p
            style={{
              marginBlockEnd: "1em",
              width: "100%",
              marginInline: "auto",
              maxWidth: 700,
            }}
          >
            {t("insurance_info.title")}
          </p>
        </div>
        <form
          style={{
            padding: "32px var(--spacing) 64px var(--spacing)",
            display: "grid",
          }}
          onSubmit={(e) => handleSubmit(e, executeRecaptcha)}
          className="info-form"
        >
          <fieldset
            style={{
              all: "unset",
              display: "grid",
              gap: "var(--lg)",
              maxWidth: 700,
              width: "100%",
              justifySelf: "center",
            }}
          >
            <div className="input-field">
              <label htmlFor="insurance">
                {t("insurance_info.input.insurance")}
              </label>
              <select
                name="insurance"
                id="insurance"
                defaultValue={searchParams.get("i") ?? 1}
              >
                {insuranceList.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="target">
                {t("insurance_info.input.insurance")}
              </label>
              <select name="target" id="target">
                <option value="myself">
                  {t("insurance_form.options.myself")}
                </option>{" "}
                <option value="family">
                  {t("insurance_form.options.family")}
                </option>
                <option value="children">
                  {t("insurance_form.options.children")}
                </option>
                <option value="other">
                  {t("insurance_form.options.other")}
                </option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="birthdate">
                {t("insurance_info.input.birthdate")}
              </label>
              <input type="date" name="birthdate" id="birthdate" />
            </div>
            <div className="input-field">
              <label htmlFor="phone">{t("insurance_info.input.phone")}</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className="input-field">
              <label htmlFor="email">{t("insurance_info.input.email")}</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="input-field">
              <label htmlFor="city">{t("insurance_info.input.city")}</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="input-field">
              <label htmlFor="name">{t("insurance_info.input.name")}</label>
              <input type="text" name="name" id="name" />
            </div>
            <Button type="submit" style={{ marginBlockStart: "var(--sm)" }}>
              {t("insurance_info.input.submit")}
            </Button>
          </fieldset>
        </form>
      </div>
      <Footer />
      <FloatingButton />
    </>
  );
}
