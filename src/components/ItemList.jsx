import Item from './Item/Item.jsx';

const ItemList = ({ items, event, completes }) => {

  return (
    <div>
      {items.map((item, i) =>
        <Item 
          text={item} 
          key={item} 
          action={event} 
          completed={completes}
          point={i}
        />
      )}
    </div>
  )
}

export default ItemList