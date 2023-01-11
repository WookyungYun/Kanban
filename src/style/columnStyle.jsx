import styled from "styled-components";

export const ListGrid = styled.div`
  display: flex;
`;

export const Container = styled.div`
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  width: 230px;
  background: #fbe9e7;
`;

export const ItemsContainer = styled.div`
  max-height: 230px;
  &.scrollContainer {
    overflow: scroll;
    ::-webkit-scrollbar { 
      display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 15px;
  font-weight: 900;
`;
