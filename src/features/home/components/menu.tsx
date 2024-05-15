import { t } from "i18next";
import { MoonIcon } from "lucide-react";
import LogoImg from "../../../assets/img/logo.svg";
import { Bar, Config, ItemOptions, Logo, Options, ThemeIcon } from "./menu.styled";

export const Menu = () => {
	return (
		<Bar>
			<Logo src={LogoImg} alt="Fernando Lopez" />
			<Options>
				<ItemOptions>{t('home')}</ItemOptions>
				<ItemOptions>{t('aboutMe')}</ItemOptions>
				<ItemOptions>{t('skills')}</ItemOptions>
				<ItemOptions>{t('works')}</ItemOptions>
			</Options>
			<Config>
				<p>Es</p>
				<ThemeIcon>
					<MoonIcon />
				</ThemeIcon>
			</Config>
		</Bar>
	);
};
