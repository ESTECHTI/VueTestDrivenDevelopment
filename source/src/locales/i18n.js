import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      signUp: "Sign Up",
      username: "Username",
      email: "E-mail",
      password: "Password",
      passwordRepeat: "Password Repeat",
      passwordMismatchValidation: "Password mismatch",
      accountActivationNotification: "Check your email to activate your account"
    },
    br: {
      signUp: "Inscrever-se",
      username: "Nome do Usuário",
      email: "E-mail",
      password: "Senha",
      passwordRepeat: "Repetir Senha",
      passwordMismatchValidation: "Sua senha não corresponde",
      accountActivationNotification: "Verifique seu e-mail para ativar sua conta"
    }
  }
});

export default i18n;
