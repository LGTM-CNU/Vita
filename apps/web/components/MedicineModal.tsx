import Image from "next/image";
import styled from "styled-components";
import Header from "./Header";
import { theme } from "../styles/theme";
import Modal from "./Modal";
import medicine from "../public/medicine.png";

interface MedicineModal {
  isOpened: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const MedicineModal: React.FC<MedicineModal> = ({
  isOpened,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose} onConfirm={onConfirm}>
      <Container>
        <Main>
          <Image src={medicine} width={200} height={200} alt={"medicine"} />
          <Detail>
            <input placeholder="약 이름" />
            <textarea placeholder="약에 대한 설명" />
          </Detail>
        </Main>

        <Date>
          <Day>월</Day>
          <Day>화</Day>
          <Day>수</Day>
          <Day>목</Day>
          <Day>금</Day>
          <Day>토</Day>
          <Day>일</Day>
        </Date>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 3rem;
  padding-top: 2rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* padding: 2rem; */

  margin-right: 2rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  margin: 1rem;

  input {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    outline: none;
  }

  textarea {
    font-size: 1.6rem;
    outline: none;
  }
`;

const Date = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  gap: 1rem;
`;

const Day = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;

  background: orange;
  color: white;
`;

const MedicineName = styled.input``;

const MedicineDescription = styled.textarea``;

export default MedicineModal;
