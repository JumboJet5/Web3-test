import { useEffect, useState } from 'react';
import { getDataFromIndexes } from './ethereumAPI';
import { IndexesGroup } from './components/IndexesGroup/IndexesGroup';
import './App.css';

function App() {
  const [ethData, setEthData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataFromIndexes().then(res => res);
        setEthData(data);
        setError(false);
      } catch {
        setError(true);
      }
    }

    /*
    тут ти підписуєшся на асинхронні дані, але не відписуєшся від них
    в даномц випадку це не помітно, так як App компонент імнує весь час роботи додатку,
    але потенційно це може призвести до утічки пам'яті або неправильної роботи
    (в меншому компоненті який розмаутчується підчас роботи додатку
    або якщо в deps буде не пустий масив і оновлення старих даних може прийти коли вже буде не актуальним)
     */
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <a href="#" className="logotype">Logotype</a>
          <button type="button" className="connect-wallet-btn">Connect wallet</button>
        </div>
        {/* а тут можна було б показувати не тільки помилку, а й статус завантаження хоча б простеньким лоадером */}
        {error
          ? 'Can not load data from the server'
          : ethData.length > 0 && <IndexesGroup indexes={ethData}
          />}
      </div>
    </div>
  );
}

export default App;
