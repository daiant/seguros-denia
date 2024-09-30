import { SunHorizon, FingerprintSimple, PersonSimpleCircle, Heart, UserCircleGear } from "@phosphor-icons/react";

export const benefits = (t) => [
  {
    icon: <SunHorizon size={72} stroke="0.7" color="var(--primary)" />,
    title: t("benefits.1.title"),
    value: t("benefits.1.value"),
  },
  {
    icon: <FingerprintSimple size={72} stroke="0.7" color="var(--primary)" />,
    title: t("benefits.2.title"),
    value: t("benefits.2.value"),
  },
  {
    icon: (
      <PersonSimpleCircle size={72} stroke="0.7" color="var(--primary)" />
    ),
    title: t("benefits.3.title"),
    value: t("benefits.3.value"),
  },
  {
    icon: <Heart size={72} stroke="0.7" color="var(--primary)" />,
    title: t("benefits.4.title"),
    value: t("benefits.4.value"),
  },
  {
    icon: <UserCircleGear size={72} stroke="0.7" color="var(--primary)" />,
    title: t("benefits.5.title"),
    value: t("benefits.5.value"),
  },
];