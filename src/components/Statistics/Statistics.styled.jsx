import styled from '@emotion/styled';

export const Item = styled.li`
  width: 20%;
  color: white;
  background: ${getRandomHexColor};
`;

export const Statistic = styled.section`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  max-width: 300px;
  text-align: center;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;
  border-radius: 2.5px;
`;

export const Title = styled.h2`
  font-size: 16p;
  color: #333333;
  text-align: center;
  padding: 25px;
  margin: 0;
`;

export const List = styled.ul`
  height: 60px;
  display: flex;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Lable = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-evenly;
`;
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
