import cl from './MyInput.module.css'

const MyInput = (props) => {
  return <input className={cl.input} {...props} type="text" placeholder='What needs to be done?' />
}

export default MyInput