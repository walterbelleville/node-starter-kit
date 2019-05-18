import React from "react";

class Item extends React.Component {
  render() {
    const items = items.item[0];
    return (
      <div className='ui unstackable items'>
        <Item
          id={items.id}
          name={items.name}
          description={items.description}
          status={items.status}
          notes={items.notes}
          due={items.due}
          createdBy={items.createdBy}
          list={items.list}
          timestamps={items.timestamps}
      />
    </div>
  );
 }
}

export default Item;
