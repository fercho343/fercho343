import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { App } from "./app";
import i18n from "./config/i18n";
import { lightTheme } from "./config/theme/light";
import { GlobalStyles } from "./styles/global-styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<I18nextProvider i18n={i18n}>
				<App />

				<GlobalStyles />
			</I18nextProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
