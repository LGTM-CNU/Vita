import styled from "styled-components";
import Image from "next/image";
import { useCallback, useState } from "react";

import MedicineModal from "./MedicineModal";
import medicine from "../public/medicine.png";
import { dateToString } from "../util/time";
import medicine1 from "../public/medicine1.png";

interface MedicineProps {
  index: number;
  type: string;
  date: Date;
}

const Medicine: React.FC<MedicineProps> = ({ type, date, index }) => {
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
        <Title>{type}</Title>
        <Detail>{"오전 : " + dateToString(date)}</Detail>
        {type === "비타민 C" && (
          <Detail>{"오후 : " + dateToString(date)}</Detail>
        )}
        <Detail>{"저녁 : " + dateToString(date)}</Detail>
      </Wrapper>
      <MedicineModal
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

  border-radius: 3rem;

  margin: 2rem;

  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;

  margin-block: 0.2rem;
`;

const Detail = styled.div`
  margin-block: 0.2rem;
  font-size: 1.6rem;

  @media only screen and (max-width: 435px) {
    font-size: 1rem;
  }
`;

export default Medicine;
