import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useState, useId, useEffect } from "react";
import uuid from "react-uuid";

import MedicineModal from "./MedicineModal";
import medicineImg from "../public/medicine1.png";
import { Medicine } from "../type/alarm";

interface MedicineProps {
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
  index: number;
}

const NewCard: React.FC<MedicineProps> = ({ setMedicines, index }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<String>(uuid());

  useEffect(() => {
    setId(uuid());
  }, [index]);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      <Wrapper index={index} onClick={() => setIsModalOpen(true)}>
        <Image src={medicineImg} width={100} height={100} alt="medicine" />
        <p>추가하기</p>
      </Wrapper>
      <MedicineModal id={id} type={"new"} isOpened={isModalOpen} onClose={onClose} setMedicines={setMedicines} />
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

  background-color: ${({ index }) => (index % 4 === 1 || index % 4 === 2 ? "#fdf4d7" : "#f8d1af")};

  border: 1px dashed black;
  border-radius: 3rem;

  margin: 2rem;

  padding: 2rem;

  p {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

export default NewCard;
