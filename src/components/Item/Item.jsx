import { useState } from 'react'
import cl from './Item.module.css'

const Item = ({ completed, ...props }) => {

  const [rootClasses, setRootClasses] = useState([cl.item])
  const [isComplete, setIsComplete] = useState(false)

  function complete() {
    if (!isComplete) {
      setRootClasses([...rootClasses, cl.complete])
      setIsComplete(true)
      completed(props.text, false)
    } else {
      setRootClasses(rootClasses.filter(item => item !== cl.complete))
      setIsComplete(false)
      completed(props.text, true)
    }
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.checkbox} onClick={complete}></div>
      <div className={cl.text}>{props.text}</div>
      <div className={cl.button}>
        <button className={cl.mark} onClick={() => props.action(props.text)} ></button>
      </div>
    </div>
  )
}

export default Item