import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";

// @translations
import globalEs from "./translations/es/global.json";
import globalEn from "./translations/en/global.json";

// @styles
import "./styles/index.css";
import 'animate.css';

// booststrap import
import "bootstrap/dist/css/bootstrap.min.css";

i18next
.init({
  interpolation: { escapeValue: false },
  fallbackLng: "en",
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
