import { createI18n } from "vue-i18n";
import en from "./en.json";
import br from "./br.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    br,
  },
});

export default i18n;
