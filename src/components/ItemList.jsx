import Item from './Item/Item.jsx';

const ItemList = ({ items, event, completes }) => {

  return (
    <div>
      {items.map((item, i) =>
        <Item 
          text={item} 
          key={i} 
          action={event} 
          id={item} 
          completed={completes}
        />
      )}
    </div>
  )
}

export default ItemList