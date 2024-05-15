import {
	type Dispatch,
	type FC,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme } from "../../config/theme/dark";
import { lightTheme } from "../../config/theme/light";

type ThemeType = "light" | "dark";

interface ThemeContextType {
	theme: ThemeType;
	setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	setTheme: () => null,
});

export function useTheme(){
	return useContext(ThemeContext)
}

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>("light");

	return (
		<StyledProvider theme={theme === 'light' ? lightTheme: darkTheme}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				{children}
			</ThemeContext.Provider>
		</StyledProvider>
	);
};
