import { t } from "i18next";
import { MoonIcon, SunIcon } from "lucide-react";
import LogoImg from "../../../assets/img/logo.svg";
import { useTheme } from "../../../services/context/theme.context";
import {
	Bar,
	Config,
	ItemOptions,
	Logo,
	Options,
	ThemeIcon,
} from "./menu.styled";

export const Menu = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Bar>
			<Logo src={LogoImg} alt="Fernando Lopez" />
			<Options>
				<ItemOptions>{t("home")}</ItemOptions>
				<ItemOptions>{t("aboutMe")}</ItemOptions>
				<ItemOptions>{t("skills")}</ItemOptions>
				<ItemOptions>{t("works")}</ItemOptions>
			</Options>
			<Config>
				<p>Es</p>
				<ThemeIcon>
					{theme === "light" ? (
						<MoonIcon onClick={() => setTheme("dark")} />
					) : (
						<SunIcon onClick={() => setTheme("light")} />
					)}
				</ThemeIcon>
			</Config>
		</Bar>
	);
};
