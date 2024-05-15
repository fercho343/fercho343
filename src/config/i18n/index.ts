import i18n from "i18next";
import ar from "./ar.json";
import es from "./es.json";

const resources = {
	ar: {
		translation: ar,
	},
	es: {
		translation: es,
	},
};

i18n.init({
	compatibilityJSON: "v3",
	interpolation: { escapeValue: false },
	resources,
	supportedLngs: ["ar", "es"],
	lng: "es",
	fallbackLng: "en",
	ns: ["translation"],
	defaultNS: "translation",
	debug: false,
});

export default i18n;
