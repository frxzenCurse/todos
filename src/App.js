import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import MyInput from './components/MyInput/MyInput';

function App() {

  const [items, setItems] = useState(['asd', 'qwe', 'zxc'])
  const [value, setValue] = useState('')

  function addItems(event) {
    if (event.keyCode === 13 && value) {
      setItems([...items, value])
      setValue('')
    }
  }

  function removeItem(item) {
    setItems(items.filter(el => el !== item))
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>todos</h1>
        <MyInput value={value} onChange={event => setValue(event.target.value)} onKeyDown={e => addItems(e)} />
        <ItemList items={items} event={removeItem} />
      </div>
    </div>
  );
}

export default App;
