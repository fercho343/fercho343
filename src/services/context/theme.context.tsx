import {
	type FC,
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme } from "../../config/theme/dark";
import { lightTheme } from "../../config/theme/light";

type ThemeType = "light" | "dark";

interface ThemeContextType {
	theme: ThemeType;
	handleChangeTheme: () => void;
	textDirrection: "ltr" | "rtl";
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	handleChangeTheme: () => {},
	textDirrection: "ltr",
});

export function useTheme() {
	return useContext(ThemeContext);
}

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>("light");
	const textDirrection: "ltr" | "rtl" = "ltr";

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		//@ts-ignore
		const themeToSet: ThemeType =
			localTheme || (prefersDarkMode ? "dark" : "light");
		setTheme(themeToSet);
		localStorage.setItem("theme", themeToSet);
	}, []);

	const handleChangeTheme = () => {
		console.log(theme === "dark");

		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		}
	};

	return (
		<StyledProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<ThemeContext.Provider
				value={{ theme, handleChangeTheme, textDirrection }}
			>
				{children}
			</ThemeContext.Provider>
		</StyledProvider>
	);
};
