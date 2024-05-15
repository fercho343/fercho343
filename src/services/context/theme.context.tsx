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
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	handleChangeTheme: () => {},
});

export function useTheme() {
	return useContext(ThemeContext);
}

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>("light");

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		if (localTheme === null) {
			if (darkModeMediaQuery) {
				setTheme("dark");
				localStorage.setItem("theme", "dark");
			} else {
				setTheme("light");
				localStorage.setItem("theme", "light");
			}
		} else {
			if (localTheme === "light") {
				setTheme("light");
			} else {
				setTheme("dark");
			}
		}
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
			<ThemeContext.Provider value={{ theme, handleChangeTheme }}>
				{children}
			</ThemeContext.Provider>
		</StyledProvider>
	);
};
