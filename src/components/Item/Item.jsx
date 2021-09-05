import { useEffect, useMemo, useState } from 'react'
import cl from './Item.module.css'

const Item = ({ point, completed, ...props }) => {

  const [rootClasses, setRootClasses] = useState([cl.item])
  const [isComplete, setIsComplete] = useState(false)

  const completes = useMemo(() => {
    if (isComplete) {
      return [...rootClasses, cl.complete]
    } else {
      return [...rootClasses].filter(item => item !== cl.complete)
    }
  }, [rootClasses, isComplete])

  function complete() {
    if (!isComplete) {
      setIsComplete(true)
      completed(props.text, false)
    } else {
      setIsComplete(false)
      completed(props.text, true)
    }
  }

  return (
    <div className={completes.join(' ')}>
      <div className={cl.checkbox} onClick={complete}></div>
      <div className={cl.text}>{props.text}</div>
      <div className={cl.button}>
        <button className={cl.mark} onClick={() => props.action(props.text)} ></button>
      </div>
    </div>
  )
}

export default Item