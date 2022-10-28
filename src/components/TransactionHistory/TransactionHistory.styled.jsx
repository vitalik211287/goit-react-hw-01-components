import styled from '@emotion/styled';

export const Table = styled.table`
  color: black;
  width: 500px;
  border-collapse: collapse;
  border: 1px solid grey;
  text-align: center;
  margin: auto auto;
`;

export const Th = styled.th`
  border: 1px solid grey;
  background-color: #00bcd4;
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding: 5px 0 5px 0;
`;

export const Td = styled.td`
  border: 1px solid grey;
  font-weight: 300;
  font-size: 13px;
  padding: 5px 0 5px 0;
`;

export const Tr = styled.tr`
  :nth-of-type(even) {
    background-color: rgba(214, 223, 225, 0.763);
  }
`;

//   tr:nth-child(even) {
//     background-color: rgb(255, 255, 137);
//   }
