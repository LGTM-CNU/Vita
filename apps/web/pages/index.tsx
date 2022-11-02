import { useState } from "react";
import styled from "styled-components";

export default function Web() {
  const [url, setUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <Container>
      <h1>Vita</h1>

      <input type="text" placeholder="Vita URL" onChange={handleChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
