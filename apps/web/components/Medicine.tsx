import styled from "styled-components";
import Image from "next/image";

import { dateToString } from "../util/time";
import medicine from "../public/medicine.png";
import medicine1 from "../public/medicine1.png";

interface MedicineProps {
  type: string;
  date: Date;
}

const Medicine: React.FC<MedicineProps> = ({ type, date }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={medicine} width={130} height={130} alt="medicine" />
        <Title>{type}</Title>
        <Detail>{"오전 : " + dateToString(date)}</Detail>
        {type === "비타민 C" && (
          <Detail>{"오후 : " + dateToString(date)}</Detail>
        )}
        <Detail>{"저녁 : " + dateToString(date)}</Detail>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  min-height: 28rem;

  background-color: #f2f2f2;

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
`;

export default Medicine;
