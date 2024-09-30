import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { handleSubmit } from "../../lib/form/form.utils";
import React from "react";
import Button from "../button/button";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function ContactForm({ style }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        setLoading(true);
        handleSubmit(e, executeRecaptcha, () => setLoading(false));
      }}
      style={style}
    >
      <div className="input-field">
        <label htmlFor="name">{t("contact.name")}</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="input-field">
        <label htmlFor="phone">{t("contact.phone")}</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="input-field">
        <label htmlFor="subject">{t("contact.subject")}</label>
        <textarea
          name="subject"
          id="subject"
          defaultValue={t("contact.subject_default")}
          rows="5"
        ></textarea>
      </div>
      <Button type="submit" loading={loading}>
        {t("common.contact")}
      </Button>
    </form>
  );
}
