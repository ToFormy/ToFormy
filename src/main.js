/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import { surveyPlugin } from "survey-vue3-ui";

// Importando as mensagens de localização
import enMessages from "./locales/en";
import ptMessages from "./locales/pt";

const messages = {
  en: enMessages,
  pt: ptMessages
};

const i18n = createI18n({
  legacy: false,
  locale: 'pt', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

const app = createApp(App);
app.use(surveyPlugin);
app.use(i18n);

registerPlugins(app);

app.mount("#app");
