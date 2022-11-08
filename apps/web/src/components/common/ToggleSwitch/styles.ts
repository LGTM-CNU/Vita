import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div<{ mode: String }>`
  width: 5rem;
  height: 3rem;
  background-color: ${({ mode }) => (mode === "user" ? `${theme.colors.vitaYellow}` : `${theme.colors.vitaOrange}`)};

  border: none;
  border-radius: 3rem;

  display: flex;
  justify-content: ${({ mode }) => (mode === "user" ? "start" : "end")};
  align-self: end;
`;

export const Switch = styled.div`
  width: 2rem;
  height: 2rem;

  margin: 0.5rem;

  background-color: ${theme.colors.lightYellow};
  border-radius: 3rem;
`;
