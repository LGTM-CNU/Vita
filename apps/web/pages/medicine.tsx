import styled from "styled-components"
import Header from "../components/Header"
import { theme } from "../styles/theme"

export default function Medicine() {
  return (
    <Container>
      <Header />
      <input type="file" />
      <input placeholder="약 이름" />

      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="약에 대한 설명"
      ></textarea>

      <Button>약 등록</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const Button = styled.button`
  width: 10rem;
  height: 5rem;

  color: white;
  background-color: ${theme.colors.primary};
  outline: none;
  border: none;

  font-size: 1.6rem;

  border-radius: 0.8rem;

  padding-inline: 1rem;
  padding-block: 1rem;
  cursor: pointer;
`
