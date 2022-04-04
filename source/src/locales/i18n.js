import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      signUp: "Sign Up",
      username: "Username",
      email: "E-mail",
      password: "Password",
      passwordRepeat: "Password Repeat"
    },
    br: {
      signUp: "Inscrever-se",
      username: "Nome do Usuário",
      email: "E-mail",
      password: "Senha",
      passwordRepeat: "Repetir Senha"
    }
  }
});

export default i18n;
