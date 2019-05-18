import React from "react";

const Item = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.status),
    React.createElement("h2", {}, props.notes),
    React.createElement("h2", {}, props.due),
    React.createElement("h2", {}, props.createdBy),
    React.createElement("h2", {}, props.list),
    React.createElement("h2", {}, props.timestamps)
  ]);
};

export default List;
