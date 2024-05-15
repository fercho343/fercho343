import styled from "styled-components";

export const Bar = styled.div`
    background: rgba(255, 255, 255, .1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(255, 255, 255, .5);
    border-right: 2px solid rgba(255, 255, 255, .2);
    border-left: 2px solid rgba(255, 255, 255, .2);
    border-radius: 99px;
    padding: 15px 20px;
    backdrop-filter: blur(1px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

export const Logo = styled.img`
    width: 30px;
`;

export const Options = styled.div`
    display: flex;
    gap: 25px;
`;

export const ItemOptions = styled.p`
    font-family: 'Fira code';
    font-size: 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    &:hover{
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
        transition: ease-in-out 0.2s;
    }

`;

export const Config = styled.div`
    display: flex;
    gap: 15px;
`;

export const ThemeIcon = styled.div`
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover{
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
