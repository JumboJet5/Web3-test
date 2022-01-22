import {useEffect, useState} from 'react';
import {getDataFromIndexes} from './ethereumAPI';
import {IndexesGroups} from './components/IndexesGroup/IndexesGroup';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [ethData, setEthData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isCanceled = false

    async function fetchData() {
      try {
        const data = await getDataFromIndexes();
        if (isCanceled) {
          return
        }
        setEthData(data);
        setError(false);
      } catch {
        setError(true);
        setEthData([]);
      } finally {
        setIsLoading(false)
      }
    }

    fetchData();
    return () => {
      isCanceled = true
    }
  }, []);

  const loaderLabel = 'Loading ...'
  const errorLabel = 'Can not load data from the server'
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <a href="#" className="logotype">Logotype</a>
          <button type="button" className="connect-wallet-btn">Connect wallet</button>
        </div>
        {isLoading ?
          loaderLabel :
          (error ? errorLabel : <IndexesGroups groups={ethData}/>)}
      </div>
    </div>
  );
}

export default App;
