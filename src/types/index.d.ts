// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		mode: "light" | "dark";

		colors: {
			primary: string;
			secondary: string;
            background: string;
            text: string;
		};
	}
}
