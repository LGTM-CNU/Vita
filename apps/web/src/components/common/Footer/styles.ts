import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  height: 7rem;
  background: rgba(255, 255, 255, 0.9);

  position: fixed;
  bottom: 0;

  display: flex;
`;

export const ListBtn = styled.div`
  width: 50%;
`;

export const ChatBtn = styled.div`
  width: 50%;

  border-left: 1px ${theme.colors.lightGray} solid;
`;
