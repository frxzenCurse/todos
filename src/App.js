import { useMemo, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList';
import MyInput from './components/MyInput/MyInput';

function App() {

  const [items, setItems] = useState(['asd', 'qwe', 'zxc'])
  const [completeItems, setCompleteItems] = useState([])
  const [filter, setFilter] = useState('All')

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

  const filteredItems = useMemo(() => {
    if (filter === 'All') {
      return items
    } else if (filter === 'Complete') {
      return [...items].filter(x => completeItems.includes(x))
    } else {
      return [...items].filter(x => !completeItems.includes(x))
    }
  }, [items, completeItems, filter])

  function getFilter(isAll) {
    setFilter(isAll)
  }

  const itemsCount = useMemo(() => {
    return (items.length - completeItems.length)
  }, [items, completeItems])

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>todos</h1>
        <MyInput create={create} />
        <ItemList
          items={filteredItems}
          event={removeItem}
          completes={complete}
        />
        {items.length !== 0 &&
          <Footer
            num={itemsCount}
            filter={getFilter}
          />
        }
      </div>
    </div>
  );
}

export default App;
