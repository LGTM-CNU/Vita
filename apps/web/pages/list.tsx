import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import MedicineCard from "@/components/MedicineCard";
import NewCard from "@/components/NewCard";
import { Medicine } from "@/type/alarm";
import fetcher from "@/util/fetcher";
import { userIdState } from "@/store/userId";

export default function List() {
  const userId = useRecoilValue(userIdState);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetcher("get", `/medicines/${userId}`);
      const fetchMedicinesData = response["data"].map((v: any) => ({
        id: v.medicines_id,
        type: v.medicines_type,
        description: v.medicines_description,
        thumbnail: v.medicines_thumbnail,
        morning: v.medicines_morning,
        evening: v.medicines_evening,
        afternoon: v.medicines_afternoon,
        repeat: v.medicines_repeat,
      }));
      setMedicines([...fetchMedicinesData]);
    };

    getData();
  }, []);
  return (
    <Container>
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
  padding-bottom: 7rem;
`;

const MedicineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  margin: 0 auto;

  padding-inline: 3rem;
`;
