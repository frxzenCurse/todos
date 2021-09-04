import Item from './Item/Item.jsx';

const ItemList = ({ items, event, completes }) => {

  return (
    <div>
      {items.map(item =>
        <Item 
          text={item} 
          key={item} 
          action={event} 
          completed={completes}
        />
      )}
    </div>
  )
}

export default ItemList