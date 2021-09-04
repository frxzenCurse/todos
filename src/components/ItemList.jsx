import Item from './Item/Item.jsx';

const ItemList = ({ items, event }) => {

  return (
    <div>
      {items.map((item, i) =>
        <Item text={item} key={i} action={event} id={item} />
      )}
    </div>
  )
}

export default ItemList