import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

import MedicineModal from "./MedicineModal";
import medicine from "../public/medicine.png";

interface MedicineProps {
  setMedicines: Dispatch<
    SetStateAction<
      {
        type: string;
        date: Date;
      }[]
    >
  >;
  index: number;
}

const Medicine: React.FC<MedicineProps> = ({ setMedicines, index }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onConfirm = useCallback(() => {
    return 2;
  }, []);

  return (
    <Container>
      <Wrapper index={index} onClick={() => setIsModalOpen(true)}>
        <Image src={medicine} width={100} height={100} alt="medicine" />
        <p>추가하기</p>
      </Wrapper>
      <MedicineModal
        type={"new"}
        isOpened={isModalOpen}
        onClose={onClose}
        onConfirm={onConfirm}
      >
        <div>{123}</div>
      </MedicineModal>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  min-width: 15rem;
`;

const Wrapper = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  min-height: 28rem;

  background-color: ${({ index }) =>
    index % 4 === 1 || index % 4 === 2 ? "#fdf4d7" : "#f8d1af"};

  border: 1px dashed black;
  border-radius: 3rem;

  margin: 2rem;

  padding: 2rem;

  p {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

export default Medicine;
