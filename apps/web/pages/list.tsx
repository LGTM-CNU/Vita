import styled from "styled-components";
import Header from "../components/Header";
import MedicineCard from "../components/MedicineCard";
import NewCard from "../components/NewCard";
import { useEffect, useState } from "react";
import { Medicine } from "../type/alarm";
import fetcher from "../util/fetcher";

export default function List() {
  const userId = 123;
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetcher("get", `/medicines/${userId}`);
      const fetchMedicinesData = response["data"].map((v: any) => ({
        id: v.medicines_id,
        type: v.medicines_type,
        description: v.medicines_description,
        thumbnail: v.medicines_thumbnail,
        alarm: { morning: v.medicines_morning, evening: v.medicines_evening, afternoon: v.medicines_afternoon },
      }));
      setMedicines([...fetchMedicinesData]);
    };

    getData();
  }, []);
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
