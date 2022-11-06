import styled from "styled-components";
import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";

import MedicineModal from "./MedicineModal";
import { Medicine } from "../type/alarm";

interface MedicineProps {
  index: number;
  medicine: Medicine;
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
}

const MedicineCard: React.FC<MedicineProps> = ({ medicine, index, setMedicines }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClose = () => setIsModalOpen(false);

  return (
    <Container>
      <Wrapper index={index} onClick={() => setIsModalOpen(true)}>
        <Image src={require(`../public/${medicine.thumbnail}`)} width={100} height={100} alt="medicine" />
        <Title>{medicine.type}</Title>
        {medicine.morning != null && <Detail>{`아침: ${medicine.morning}`}</Detail>}
        {medicine.evening != null && <Detail>{`점심: ${medicine.evening}`}</Detail>}
        {medicine.afternoon != null && <Detail>{`저녁: ${medicine.afternoon}`}</Detail>}
      </Wrapper>
      <MedicineModal
        id={medicine.id}
        type="edit"
        isOpened={isModalOpen}
        medicine={medicine}
        onClose={onClose}
        setMedicines={setMedicines}
      />
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

  border-radius: 3rem;

  margin: 2rem;

  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;

  margin-top: 2rem;
  margin-bottom: 0.4rem;

  @media only screen and (max-width: 435px) {
    font-size: 1.4rem;
  }
`;

const Detail = styled.div`
  margin-block: 0.2rem;
  font-size: 1.6rem;

  @media only screen and (max-width: 435px) {
    font-size: 1rem;
  }
`;

export default MedicineCard;
