import styled from "styled-components"

export default function Medicine() {
  return (
    <Container>
      <input type="file" />
      <input placeholder="약 이름" />

      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="약에 대한 설명"
      ></textarea>

      <button>약 등록</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
`
