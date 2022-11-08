import { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import ToggleSwitch from "@/components/ToggleSwitch";

export default function Web() {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"user" | "manager">("user");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <Container>
      <Header />
      <Title>
        {mode}
        <ToggleSwitch mode={mode} setMode={setMode} />
      </Title>
      <LogIn>
        <IdInput type="text" placeholder={`${mode} ID를 입력해주세요.`} onChange={handleChange} />
        <LogInBtn>로그인</LogInBtn>
      </LogIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 30rem;
  font-size: 3.5rem;
  margin: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogIn = styled.div`
  display: flex;
  width: 30rem;

  border: 1px lightgray solid;
`;

const IdInput = styled.input`
  width: 20rem;
  padding: 1rem;

  font-size: 1.3rem;
  outline: none;
  border: none;
`;

const LogInBtn = styled.button`
  width: 10rem;

  border: none;

  font-size: 1.5rem;
  color: white;

  background-color: #ee9652;
  &:hover {
    opacity: 80%;
  }
`;
