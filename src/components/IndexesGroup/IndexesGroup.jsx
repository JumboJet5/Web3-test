import {IndexInformation} from '../IndexInformation/IndexInformation';
import {v4 as uuid_v4} from "uuid";
import './indexesGroup.css';

export const IndexesGroup = ({indexes}) => {
  const filterByIndex = (indexArray, indType) => {
    return indexArray.filter(index => index.name.split(' ').slice(0, -1).join(' ') === indType);
  }

  // групування потрібно було зробити же на етапі завантаження, щоб потім не фільтрувати на етапі відображення
  const otherIndexes = filterByIndex(indexes, 'Other Index');
  const defiIndexs = filterByIndex(indexes, 'DeFi Index');

  return (
    <section className="group-section">
      <h1 className="indexes-title">All Indeces</h1>
      <div className="index-group">
        {/* групу індексів можна було б теж винести в окремий компонент, */}
        {/* тоді б реалізація не так сильно залежала б від кількості груп, а підлаштовувалась під групи динамічно */}
        <div className="indexesGroup">
          {/* заголовок можна було винести з грід контейнера або краще його стилізувати щоб не прийшлося заповняти пустими елементами  */}
          <h2 className="index-type">DeFi Index</h2>
          <div className="empty-grid-el"></div>
          <div className="empty-grid-el"></div>
          <div className="empty-grid-el"></div>
          {defiIndexs.map(index => <IndexInformation key={uuid_v4()} indexData={index}/>)}
        </div>
      </div>
      <div className="index-group">
        <div className="otherIndexesGroup indexesGroup">
          <h2 className="index-type">Other Index</h2>
          <div className="empty-grid-el"></div>
          <div className="empty-grid-el"></div>
          <div className="empty-grid-el"></div>
          {otherIndexes.map(index => <IndexInformation key={uuid_v4()} indexData={index}/>)}
        </div>
      </div>
    </section>
  )
}
