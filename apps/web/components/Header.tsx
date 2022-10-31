import Image from "next/image"
import styled from "styled-components"
import Vita from "../public/logo.png"

export default function Header() {
  return (
    <Container>
      <Image src={Vita} width={100} height={50} alt="Vita" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 0.1rem solid grey;

  margin-bottom: 1rem;
`

// FC7522
