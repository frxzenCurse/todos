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

  function complete(complete) {
    setCompleteItems([...completeItems, complete])
  }

  function sortComplete(arr) {
    if (arr.includes('Complete')) {
      setItems()
    }
    
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
          />
        }
      </div>
    </div>
  );
}

export default App;
