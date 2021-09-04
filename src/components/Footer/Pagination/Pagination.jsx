import { useState } from 'react/cjs/react.development'
import cl from './Pagination.module.css'

const Pagination = ({ sortCompleted, sortAct }) => {


  function sortComple() {
    sortCompleted()
  }

  function sortActive() {
    sortAct()
  }

  return (
    <div className={cl.pagination}>
      <div
        className={[cl.item, cl.active].join(' ')}
      >
        All
      </div>
      <div
        className={cl.item}
        onClick={sortActive}
      >
        Active
      </div>
      <div
        className={cl.item}
        onClick={sortComple}
      >
        Complete
      </div>
    </div>
  )
}

export default Pagination