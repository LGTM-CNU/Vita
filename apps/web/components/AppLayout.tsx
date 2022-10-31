import { PropsWithChildren } from "react"
import styled from "styled-components"

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  flex-direction: column;

  margin: 0 auto;
  max-width: 48rem;

  background-color: white;
`

// 10분이 지났습니다. 비타민 드셨나요? -> 긍정이면

// 부정이면 -> 비타민을 먹지못한 이유를 말씀해주세요.

// 응답이 기록되었습니다.
