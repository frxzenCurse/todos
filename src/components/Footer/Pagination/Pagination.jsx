import cl from './Pagination.module.css'

const Pagination = () => {

  const arr = ['All', 'Active', 'Complete']

  return (
    <div className={cl.pagination}>
      {arr.map((el, i) => 
        <div className={i === 0 ? [cl.item, cl.active].join(' ') : cl.item} key={el} >{el}</div>  
      )}
    </div>
  )
}

export default Pagination