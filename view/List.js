import React from "react";

const List = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.description),
    React.createElement("h2", {}, props.createdBy),
    React.createElement("h2", {}, props.timestamps)
  ]);
};

export default List;
