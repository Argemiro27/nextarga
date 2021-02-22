  
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--main);
  height: 60px;
  div {
    svg {
      font-size: 45px;
      cursor: pointer;
      margin: 0 10px;
      color: var(--black);
    }
  }
`;