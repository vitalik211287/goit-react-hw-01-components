import PropTypes from 'prop-types';
import { List, Item, Avatar, FriendData, Chip } from './FriendList.styled';

function FriendList({ friends }) {
  const { avatar, name, isOnline, id } = friends;
  return (
    <List>
      {friends.map(friend => {
        const color = friend.isOnline ? 'green' : 'red';
        return (
          <Item key={friend.id}>
            <Chip isOnline={friend.isOnline}>{friend.isOnline}</Chip>
            <Avatar src={friend.avatar} alt={friend.name} />
            <FriendData>{friend.name}</FriendData>
          </Item>
        );
      })}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
