import styled from "styled-components";

export const Body = styled.div<{ $direction: "ltr" | "rtl" }>`
    width: 100%;
    width: 80%;
    margin: 20px auto;
    direction: ${({ $direction }) => ($direction === "rtl" ? "rtl" : "ltr")};
`;
