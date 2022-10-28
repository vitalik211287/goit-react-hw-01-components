import PropTypes from 'prop-types';
import { Item, Statistic, Title, List, Lable } from './Statistics.styled';

function Statistics({ title, stats }) {
  const { id, label, percentage } = stats;
  return (
    <Statistic>
      <Title>UPLOAD STATS</Title>
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Lable>{stat.label}</Lable>
              <Lable>{stat.percentage}%</Lable>
            </Item>
          );
        })}
      </List>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
