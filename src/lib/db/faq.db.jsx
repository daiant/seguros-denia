import Group from "../../components/group/group";
import { WhatsappLogo } from "@phosphor-icons/react";

export const faq = (t) => [
  {
    question: t("faq.1.question"),
    answer: t("faq.1.answer"),
  },
  {
    question: t("faq.2.question"),
    answer: t("faq.2.answer"),
    cta: {
      link: "",
      value: (
        <Group gap="xs">
          <span>{t("common.contact")}</span>
          <WhatsappLogo size={24} />
        </Group>
      ),
    },
  },
  {
    question: t("faq.3.question"),
    answer: t("faq.3.answer"),
  },
  {
    question: t("faq.4.question"),
    answer: t("faq.4.answer"),
  },
  {
    question: t("faq.5.question"),
    answer: t("faq.5.answer"),
  },
  {
    question: t("faq.6.question"),
    answer: t("faq.6.answer"),
  },
];
