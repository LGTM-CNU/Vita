import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;

  margin: 0 auto;
  max-width: 48rem;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 5rem;
`;
