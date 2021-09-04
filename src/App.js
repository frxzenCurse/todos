import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList';
import MyInput from './components/MyInput/MyInput';

function App() {

  const [items, setItems] = useState(['asd', 'qwe', 'zxc'])
  const [completeItems, setCompleteItems] = useState([])

  function create(item) {
    setItems([...items, item])
  }

  function removeItem(item) {
    setItems(items.filter(el => el !== item))
  }
  
  function complete(complete, isComplete) {
    if (!isComplete) {
      setCompleteItems([...completeItems, complete])
    } else {
      setCompleteItems([...completeItems].filter(item => item !== complete))
    }
  }
  // useMemo
  function sortComplete() {
    setItems([...items].filter(x => completeItems.includes(x)))
  }

  function sortActive() {
    setItems([...items].filter(x => !completeItems.includes(x)))
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>todos</h1>
        <MyInput create={create} />
        <ItemList
          items={items}
          event={removeItem}
          completes={complete}
        />
        {items.length !== 0 &&
          <Footer
            num={items.length}
            completed={sortComplete}
            active={sortActive}
          />
        }
      </div>
    </div>
  );
}

export default App;
