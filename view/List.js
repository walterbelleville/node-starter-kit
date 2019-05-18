import React from "react";

class List extends React.Component {
  render() {
    const lists = lists.list[0];
    return (
      <div className='ui unstackable lists'>
        <list
          id={lists.id}
          name={lists.name}
          description={lists.description}
          note={lists.note}
          due={lists.due}
          createdBy={lists.createdBy}
          list={lists.list}
          timestamps={lists.timestamps}
      />
    </div>
  );
 }
}

export default List;
