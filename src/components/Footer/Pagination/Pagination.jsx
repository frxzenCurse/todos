import { useState } from 'react/cjs/react.development'
import cl from './Pagination.module.css'

const Pagination = ({ sortCompleted }) => {

  const arr = ['All', 'Active', 'Complete']

  function sort() {
    sortCompleted()
  }

  return (
    <div className={cl.pagination}>
      {arr.map((el, i) =>
        <div
          className={i === 0 ? [cl.item, cl.active].join(' ') : cl.item}
          key={el}
          onClick={sort}
        >
          {el}
        </div>
      )}
    </div>
  )
}

export default Pagination