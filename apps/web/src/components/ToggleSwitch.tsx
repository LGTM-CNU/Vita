import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

interface ToggleSwitchProps {
  mode: "user" | "manager";
  setMode: Dispatch<SetStateAction<"user" | "manager">>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ mode, setMode }) => {
  const onClickHandler = () => (mode === "manager" ? setMode("user") : setMode("manager"));

  return (
    <Container mode={mode} onClick={onClickHandler}>
      <Switch />
    </Container>
  );
};

const Container = styled.div<{ mode: String }>`
  width: 5rem;
  height: 3rem;
  background-color: #ee9652;

  border: none;
  border-radius: 3rem;

  display: flex;
  justify-content: ${({ mode }) => (mode === "user" ? "start" : "end")};
  align-self: end;
`;

const Switch = styled.div`
  width: 2rem;
  height: 2rem;

  margin: 0.5rem;

  background-color: #f6f6c9;
  border-radius: 3rem;
`;

export default ToggleSwitch;
