import { Dispatch, SetStateAction } from "react";

import { Container, Switch } from "./styles";

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

export default ToggleSwitch;
