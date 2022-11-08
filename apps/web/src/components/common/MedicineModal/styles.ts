import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 3rem;
  padding-top: 2rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-right: 2rem;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  margin: 1rem;

  input {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    outline: none;
  }

  textarea {
    font-size: 1.6rem;
    outline: none;
  }
`;

export const Date = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  gap: 1rem;
`;

export const Day = styled.button<{ selected: boolean }>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  border: none;

  background-color: ${({ selected }) => (selected ? "#ED9752" : "#F3CE5C")};
  color: white;
`;

export const Select = styled.select`
  margin: 0 auto;
  height: 4rem;
  margin-bottom: 1rem;

  width: 70%;

  font-size: 1.6rem;
`;
