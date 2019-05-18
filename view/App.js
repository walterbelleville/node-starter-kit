import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Item from './Item';

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'List'),
        React.createElement(List, {
            name: name,
            description: description,
            note: note,
            due: due,
            createdBy: createdBy,
            timestamps: timestamps
        }),
        React.createElement(List, {
            name: name,
            description: description,
            note: note,
            due: due,
            createdBy: createdBy,
            timestamps: timestamps
        }),
        React.createElement(Item, {
            name: name,
            description: description,
            status: status,
            notes: notes,
            due: due,
            createdBy: createdBy,
            list: list,
            timestamps: timestamps
        }),
    ]);
};
  
ReactDOM.render(React.createElement(App), document.getElementById('root'));
  