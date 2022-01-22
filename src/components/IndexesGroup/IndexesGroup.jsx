import {IndexInformation} from '../IndexInformation/IndexInformation';
import './indexesGroup.css';

export const IndexesGroups = ({groups}) => {
  return (
    <section className="group-section">
      <h1 className="indexes-title">All Indeces</h1>
      {groups.map(({indexes, name}) => <IndexesGroup indexes={indexes} groupName={name} key={name}/>)}
    </section>
  )
}

export const IndexesGroup = ({indexes, groupName}) => {
  return (
    <div className="index-group">
      <h2 className="index-type">{groupName}</h2>
      <div className="indexesGroup">
        {indexes.map(index => <IndexInformation key={index.name} indexData={index}/>)}
      </div>
    </div>
  )
}
