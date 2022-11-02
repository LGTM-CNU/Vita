import Image from "next/image";
import styled from "styled-components";
import Vita from "../public/logo.png";

export default function Header() {
  return (
    <Container>
      <Image src={Vita} width={200} height={100} alt="Vita" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
`;
