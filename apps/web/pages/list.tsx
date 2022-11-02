import styled from "styled-components"
import Image from "next/image"
import medicine from "../public/medicine.png"
import medicine1 from "../public/medicine1.png"
import Header from "../components/Header"

export default function List() {
  return (
    <Container>
      <Header />
      <MedicineContainer>
        <Medicine>
          <Image src={medicine} width={130} height={130} alt="medicine" />
          <Title>비타민 C</Title>
          <Detail>17시 30분</Detail>
        </Medicine>
        <Medicine>
          <Image src={medicine} width={130} height={130} alt="medicine" />
          <Title>비타민 C</Title>
        </Medicine>
        <Medicine>
          <Image src={medicine} width={130} height={130} alt="medicine" />
          <Title>비타민 C</Title>
        </Medicine>
        <Medicine>
          <Image src={medicine} width={130} height={130} alt="medicine" />
          <Title>비타민 C</Title>
        </Medicine>
      </MedicineContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 30%;

  /* margin: 0 auto; */
  /* background-color: #fc7522; */
`

const MedicineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  margin: 0 auto;

  /* background-color: #fc7522; */
`

const Medicine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  /* border: 1px solid black;
  border-collapse: collapse; */
  /* background-color: blue; */
`

const Title = styled.h1`
  font-size: 1.6rem;
`
const Detail = styled.div`
  font-size: 1.3rem;
`

// 비타민C의 효능
// 안먹었어 -> 먼지못한 이유가 있으신가요?

// 10분후에 다시 알려드릴까요?
// 응 / 아니
//

// 비타민 먹었을 경우 ->
// 비타민 C는 면역력 증진, 감기 예방 피부 노화를 방지하는 효능이 있습니다. 좋은 하루되세요.
// 비타민 B는 몸에 활력을 주고 신진대사를 원할히 하는데 도움을 줍니다. 행복하세요.
