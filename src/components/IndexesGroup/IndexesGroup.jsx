import { IndexInformation } from '../IndexInformation/IndexInformation';
import './indexesGroup.css';

export const IndexesGroup = ({ indexes }) => {
  return (
    <>
      <h1 className="indexes-title">All Indeces</h1>
      <div className="indexesGroup">
        {indexes.map(index => <IndexInformation indexData={index} />)}
      </div>
    </>
  )
}
