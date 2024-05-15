import { t } from "i18next";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Img from "../../../assets/img/profile.png";
import {
	Avatar,
	AvatarContainer,
	Body,
	Information,
	InformationContent,
	ProfileContent,
	SocialContainer,
	SocialIcon,
	Span,
	Subtitle,
	Title,
} from "./home.styled";

export const Home = () => {
	return (
		<Body>
			<InformationContent>
				<Subtitle>{t("home1")}</Subtitle>
				<Title>Fernando López</Title>

				<Information>
					{t("aPasionate")}
					<Span> {t("fullStack")}</Span> {t("experience")}
				</Information>
			</InformationContent>

			<ProfileContent>
				<AvatarContainer>
					<Avatar src={Img} alt="avatar" />
					<SocialContainer>
						<SocialIcon>
							<InstagramIcon />
						</SocialIcon>

						<SocialIcon>
							<GithubIcon />
						</SocialIcon>

						<SocialIcon>
							<LinkedinIcon />
						</SocialIcon>
					</SocialContainer>
				</AvatarContainer>
			</ProfileContent>
		</Body>
	);
};
