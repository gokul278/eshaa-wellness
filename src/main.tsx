import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_de from "./translations/ger/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// import "primeicons/primeicons.css";
// import { PrimeReactProvider } from "primereact/api";
// import "primeflex/primeflex.css";
// import "primereact/resources/primereact.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "de",
  resources: {
    de: {
      global: global_de,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <PrimeReactProvider> */}
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>{" "}
    {/* </PrimeReactProvider> */}
  </StrictMode>
);
