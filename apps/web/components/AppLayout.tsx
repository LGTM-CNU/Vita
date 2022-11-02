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
  height: 100%;
  flex-direction: column;

  margin: 0 auto;
  max-width: 48rem;

  background-color: white;
`;
