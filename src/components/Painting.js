import PropTypes from 'prop-types';

export default function Painting({
  url,
  title,
  authorUrl,
  authorName,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      props
      <p>Цена: {price}</p>
      <p>
        Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}
      </p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
