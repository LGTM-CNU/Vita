import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import {
  Container,
  Dimmed,
  ModalInner,
  ModalContent,
  ModalActionContainer,
  CancelButton,
  ConfirmButton,
} from "./styles";

interface ModalProps {
  type: "new" | "edit";
  isOpened: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, isOpened, onClose, onConfirm, children }) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("modal-root"));
  }, []);

  if (!element) return <></>;

  return createPortal(
    <Container isOpened={isOpened}>
      {/* 모달 바깥 검정 배경 */}
      <Dimmed onClick={onClose} />
      {/* 모달 내부 */}
      <ModalInner>
        <ModalContent>{children}</ModalContent>
        <ModalActionContainer>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>{type === "new" ? "등록" : "수정"}</ConfirmButton>
        </ModalActionContainer>
      </ModalInner>
    </Container>,
    element
  );
};

export default React.memo(Modal);
