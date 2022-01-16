import { IndexInformation } from '../IndexInformation/IndexInformation';
import { v4 as uuid_v4 } from "uuid";
import './indexesGroup.css';

export const IndexesGroup = ({ indexes }) => {
  const filterByIndex = (indexArray, indType) => {
    return indexArray.filter(index => index.name.split(' ').slice(0, -1).join(' ') === indType);
  }

  const otherIndexes = filterByIndex(indexes, 'Other Index');
  const defiIndexs = filterByIndex(indexes, 'DeFi Index');

  return (
    <section className="group-section">
      <h1 className="indexes-title">All Indeces</h1>
      <div className="index-group">
        <h2 className="index-type">DeFi Index</h2>
        <div className="indexesGroup">
          {defiIndexs.map(index => <IndexInformation key={uuid_v4()} indexData={index} />)}
        </div>
      </div>
      <div className="index-group">
        <h2 className="index-type">Other Index</h2>
        <div className="otherIndexesGroup indexesGroup">
          {otherIndexes.map(index => <IndexInformation key={uuid_v4()} indexData={index} />)}
        </div>
      </div>
    </section>
  )
}
