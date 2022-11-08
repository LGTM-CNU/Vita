import { PropsWithChildren } from "react";
import { Container } from "./styles";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
