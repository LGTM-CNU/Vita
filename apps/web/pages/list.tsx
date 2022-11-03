import styled from "styled-components";
import Header from "../components/Header";
import MedicineCard from "../components/MedicineCard";
import NewCard from "../components/NewCard";
import { useState } from "react";
import { Medicine } from "../type/alarm";
import uuid from "react-uuid";

const medicineArray: Medicine[] = [
  {
    id: uuid(),
    type: "비타민 A",
    description: "엄마가 준비한 비타민C",
    thumbnail: "medicine1.png",
    alarm: { morning: "10:00", evening: "점심", afternoon: "저녁" },
  },
  {
    id: uuid(),
    type: "비타민 C",
    description: "엄마가 준비한 비타민C",
    thumbnail: "medicine2.png",
    alarm: { morning: "10:00", evening: "14:00", afternoon: "저녁" },
  },
  {
    id: uuid(),
    type: "비타민 D",
    description: "엄마가 준비한 비타민C",
    thumbnail: "medicine3.png",
    alarm: { morning: "10:00", evening: "점심", afternoon: "21:00" },
  },
  {
    id: uuid(),
    type: "비타민 G",
    description: "엄마가 준비한 비타민C",
    thumbnail: "medicine4.png",
    alarm: { morning: "10:00", evening: "12:00", afternoon: "20:00" },
  },
  {
    id: uuid(),
    type: "비타민 Z",
    description: "엄마가 준비한 비타민C",
    thumbnail: "medicine2.png",
    alarm: { morning: "아침", evening: "12:00", afternoon: "19:00" },
  },
];

export default function List() {
  const [medicines, setMedicines] = useState(medicineArray);
  return (
    <Container>
      <Header />
      <MedicineContainer>
        {medicines.map((medicine, index) => (
          <MedicineCard key={index} index={index} medicine={medicine} setMedicines={setMedicines} />
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
