import { useState } from 'react/cjs/react.development'
import cl from './MyInput.module.css'


const MyInput = ({ create }) => {

  const [value, setValue] = useState('')

  function addItems(event) {
    if (event.keyCode === 13 && value) {
      create(value)
      setValue('')
    }
  }

  return <input className={cl.input} type="text" placeholder='What needs to be done?' value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => addItems(e)} />
}

export default MyInput