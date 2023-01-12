import styled from "styled-components";

export const Button = styled.button`
  background: #f2bfb2;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #f2bfb2;
  color: white;
  cursor: pointer;
  font-weight: 700;
  margin-top: 10px;
  &.button-disabled {
    background: lightgray;
    border: 1px solid lightgray;
  }
`;

export const AddCardButton = styled.button`
  background: #ffab91;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ffab91;
  color: white;
  width: 80px;
  cursor: pointer;
  font-weight: 700;
`;

export const AddColumnButton = styled.div`
  background: #d3a69c;
  border-radius: 5px;
  height: 30px;
  padding: 3px 15px;
  margin: 5px;
  border: 1px solid #d3a69c;
  color: white;
  cursor: pointer;
`;
