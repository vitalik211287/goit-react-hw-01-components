import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  width: 270px;
  text-align: center;
  margin-bottom: 50px;
  border-radius: 2.5px;
  padding-left: 0;
  background-color: white;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 2.5px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 2.5px;
  border: 1px solid rgba(214, 223, 225, 0.763);
`;
export const Chip = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  border: 1px solid rgba(214, 223, 225, 0.763);
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;
export const FriendData = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-left: 10px;
`;
