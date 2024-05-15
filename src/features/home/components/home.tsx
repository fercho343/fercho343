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
				<Subtitle>Hi I'm</Subtitle>
				<Title>Fernando Lopez</Title>

				<Information>
					A pasionate <Span>{"<Full Stack Web and Mobile developer />"}</Span>{" "}
					width 6 years experience creating user frendly web and mobile apps
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
