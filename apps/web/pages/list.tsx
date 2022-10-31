import styled from "styled-components"
import Image from "next/image"
import medicine from "../public/medicine.png"
import medicine1 from "../public/medicine1.png"

export default function List() {
  return (
    <Container>
      <Medicine>
        <Image src={medicine} width={200} height={200} alt="medicine" />
      </Medicine>
      <Medicine>
        <Image src={medicine1} width={200} height={200} alt="medicine" />
      </Medicine>
    </Container>
  )
}

const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 30%;

  /* background-color: #fc7522; */
`

const Medicine = styled.div`
  background-color: blue;
`

// 비타민C의 효능
// 안먹었어 -> 먼지못한 이유가 있으신가요?

// 10분후에 다시 알려드릴까요?
// 응 / 아니
//

// 비타민 먹었을 경우 ->
// 비타민 C는 면역력 증진, 감기 예방 피부 노화를 방지하는 효능이 있습니다. 좋은 하루되세요.
// 비타민 B는 몸에 활력을 주고 신진대사를 원할히 하는데 도움을 줍니다. 행복하세요.
