import styled from "styled-components";
import { fadeIn, fadeOut } from "@/styles/animation";
import { flexCenter } from "@/styles/utils";

export const Container = styled.div<{ isOpened: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  animation: ${({ isOpened }) => (isOpened ? fadeIn : fadeOut)} 0.15s ease-out;

  transition: visibility 0.15s;

  z-index: 1000;
`;

export const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 1.4rem;
  background-color: #ffffff;
  z-index: 1000;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  width: 31.3rem;
`;

export const ModalActionContainer = styled.div`
  display: flex;
  border-top: 0.1rem solid #bfbfbf;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const CancelButton = styled.div`
  ${flexCenter};
  width: 50%;
  height: 5.92rem;

  border-right: 0.1rem solid #bfbfbf;
`;

export const ConfirmButton = styled.div`
  ${flexCenter};
  width: 50%;
  height: 5.92rem;
`;
