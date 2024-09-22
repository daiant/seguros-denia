import React from "react";
import { useTranslation } from "react-i18next"

export function useCustomTranslation() {
  const { t, i18n } = useTranslation()

  React.useEffect(() => {
    i18n.changeLanguage(
      globalThis.localStorage?.getItem("lang") ?? i18n.language
    );
  }, [i18n]);

  return { t };
}