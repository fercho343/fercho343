import { useTheme } from "../../../services/context/theme.context";
import { Home } from "../components/home";
import { Menu } from "../components/menu";
import { Body } from "../components/styled";

export const HomeScreen = () => {
	const { textDirrection } = useTheme();
	return (
		<Body $direction={textDirrection}>
			<Menu />
			<Home />
		</Body>
	);
};
