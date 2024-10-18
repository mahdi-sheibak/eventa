import fa from "./messages/fa.json";
import en from "./messages/en.json";

export const LANGUAGES = {
  fa: "fa",
  en: "en",
} as const;

const defaultLocale = LANGUAGES.fa;

type MessageSchema = typeof en;

export default defineI18nConfig(() => ({
  legacy: false,
  locale: defaultLocale,
  messages: {
    fa,
    en,
  },
}));
