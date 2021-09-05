import cl from './Pagination.module.css'

const Pagination = ({ action }) => {

  const arr = ['All', 'Active', 'Complete']

  return (
    <div className={cl.pagination}>
      {arr.map(item =>
        <div
          className={cl.item}
          onClick={() => action(item)}
          key={item}
        >
          {item}
        </div>
      )}
    </div>
  )
}

export default Pagination