import ReactDOM from 'react-dom';
import paintings from './paintings.json';

const data = paintings[0];



function Painting() {
    return  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Цена: {data.price}</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Add to cart</button>
  </div>
}

const root = document.querySelector('#root')
ReactDOM.render(<Painting/>, root);