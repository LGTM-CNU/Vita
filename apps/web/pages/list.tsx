import styled from "styled-components";
import medicine from "../public/medicine.png";
import Header from "../components/Header";
import Medicine from "../components/Medicine";

export default function List() {
  return (
    <Container>
      <Header />
      <MedicineContainer>
        <Medicine type="비타민 C" date={new Date()} />
        <Medicine type="비타민 D" date={new Date()} />
        <Medicine type="비타민 C" date={new Date()} />
        <Medicine type="비타민 C" date={new Date()} />
      </MedicineContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30%;
`;

const MedicineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  margin: 0 auto;

  padding-inline: 3rem;
  justify-content: space-around;
`;
// 비타민C의 효능
// 안먹었어 -> 먼지못한 이유가 있으신가요?

// 10분후에 다시 알려드릴까요?
// 응 / 아니
//

// 비타민 먹었을 경우 ->
// 비타민 C는 면역력 증진, 감기 예방 피부 노화를 방지하는 효능이 있습니다. 좋은 하루되세요.
// 비타민 B는 몸에 활력을 주고 신진대사를 원할히 하는데 도움을 줍니다. 행복하세요.
