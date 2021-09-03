import cl from './Item.module.css'

const Item = (props) => {
  return (
    <div className={cl.item}>
      <input className={cl.checkbox} type="checkbox" />
      <div className={cl.text}>{props.text}</div>
      <div className={cl.button}>
        <button className={cl.mark} onClick={() => props.action(props.text)} ></button>
      </div>
    </div>
  )
}

export default Item