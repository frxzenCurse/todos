import cl from './Footer.module.css'
import Pagination from './Pagination/Pagination'

const Footer = ({ filter, ...props}) => {
  return (
    <div className={cl.footer}>
      <div className={cl.left}>
        <div className={cl.num}>{props.num}</div>
        <div className={cl.text}>items left</div>
      </div>
      <Pagination action={filter} />
      <div className={cl.right}>Clear completed</div>
    </div>
  )
}

export default Footer