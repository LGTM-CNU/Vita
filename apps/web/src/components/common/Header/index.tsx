import Image from "next/image";
import Vita from "@/public/logo.png";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Image src={Vita} width={200} height={100} alt="Vita" />
    </Container>
  );
}
