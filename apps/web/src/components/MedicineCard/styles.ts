import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-width: 15rem;
`;

export const Wrapper = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  min-height: 28rem;

  background-color: ${({ index }) => (index % 4 === 1 || index % 4 === 2 ? "#fdf4d7" : "#f8d1af")};

  border-radius: 3rem;

  margin: 2rem;

  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;

  margin-top: 2rem;
  margin-bottom: 0.4rem;

  @media only screen and (max-width: 435px) {
    font-size: 1.4rem;
  }
`;

export const Detail = styled.div`
  margin-block: 0.2rem;
  font-size: 1.6rem;

  @media only screen and (max-width: 435px) {
    font-size: 1rem;
  }
`;
