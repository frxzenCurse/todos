import Item from './Item/Item.jsx';

const ItemList = ({ items, event }) => {

  return (
    <div>
      {items.map((item, i) =>
        <Item text={item} key={i} action={event} />
      )}
    </div>
  )
}

export default ItemList