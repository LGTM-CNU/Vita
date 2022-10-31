import Image from "next/image"
import styled from "styled-components"
import Header from "../components/Header"
import { theme } from "../styles/theme"
import medicine from "../public/medicine.png"

export default function Medicine() {
  return (
    <Container>
      <Header />
      <input type="file" style={{ paddingLeft: "2rem" }} />

      <Main>
        <Image src={medicine} width={200} height={200} alt={"medicine"} />

        <Detail>
          <input placeholder="약 이름" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="약에 대한 설명"
          ></textarea>
        </Detail>
      </Main>

      <Date>
        <Day>월</Day>
        <Day>월</Day>
        <Day>월</Day>
        <Day>월</Day>
        <Day>월</Day>
        <Day>월</Day>
        <Day>월</Day>
      </Date>

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

  margin: 0 auto;

  padding-inline: 1rem;
  padding-block: 1rem;
  cursor: pointer;
`

const Main = styled.div`
  display: flex;
  width: 100%;

  /* padding: 2rem; */

  margin-right: 2rem;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;

  input {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    outline: none;
  }

  textarea {
    font-size: 1.6rem;
    outline: none;
  }
`

const Date = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 2rem;
`
const Day = styled.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;

  background: orange;
  color: white;
`
