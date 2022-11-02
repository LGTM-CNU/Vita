import styled from "styled-components";
import medicine from "../public/medicine.png";
import Header from "../components/Header";
import MedicineCard from "../components/MedicineCard";
import NewCard from "../components/NewCard";
import { useState } from "react";

const medicineArray = [
  { type: "비타민 A", date: new Date() },
  { type: "비타민 B", date: new Date() },
  { type: "비타민 C", date: new Date() },
  { type: "비타민 D", date: new Date() },
  { type: "비타민 E", date: new Date() },
];

export default function List() {
  const [medicines, setMedicines] = useState(medicineArray);
  return (
    <Container>
      <Header />
      <MedicineContainer>
        {medicines.map(({ type, date }, index) => (
          <MedicineCard key={index} index={index} type={type} date={date} />
        ))}
        <NewCard index={medicines.length} setMedicines={setMedicines} />
      </MedicineContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const MedicineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  margin: 0 auto;

  padding-inline: 3rem;
`;
// 비타민C의 효능
// 안먹었어 -> 먼지못한 이유가 있으신가요?

// 10분후에 다시 알려드릴까요?
// 응 / 아니
//

// 비타민 먹었을 경우 ->
// 비타민 C는 면역력 증진, 감기 예방 피부 노화를 방지하는 효능이 있습니다. 좋은 하루되세요.
// 비타민 B는 몸에 활력을 주고 신진대사를 원할히 하는데 도움을 줍니다. 행복하세요.
