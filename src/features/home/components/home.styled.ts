import styled from "styled-components";

export const Body = styled.div`
    width: '100%';
    margin-top: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InformationContent = styled.div`
    width: 45%;
`;

export const Title = styled.h1`
    font-family: 'Fira code';
    font-size: 40px;
`;

export const Subtitle = styled.h2`
    font-family: 'Fira code';
    font-size: 25px;
`;

export const Information = styled.p`
    margin-top: 10px;
    font-family: 'Fira code';
    font-size: 16px;
    line-height: 25px;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ProfileContent = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
`;

export const AvatarContainer = styled.div`
    width: 200px;
    aspect-ratio: 1;
    position: relative;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => `${theme.colors.secondary}60`};
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export const SocialContainer = styled.div`
    width: 200px;
    padding: 5px 10px;
    background-color: ${({ theme }) => `${theme.colors.secondary}60`};
    border-radius: 5px;
    position: absolute;
    bottom: -10px;
    display: flex;
    justify-content: space-between;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const SocialIcon = styled.a`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.text};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => `${theme.colors.text}80`};
    }
`;
