import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'List'),
        React.createElement(List, {
            name: 'Walk dog',
            description: 'Walk the dog',
            createdBy: 'Walter',
            timestamps: '12:00 pm'
        }),
        React.createElement(List, {
            name: 'Walk dog',
            description: 'Walk the dog',
            createdBy: 'Walter',
            timestamps: '12:00 pm'
        }),
        React.createElement(Item, {
            name: 'Walk dog',
            status: 'Walk the dog',
            notes: 'Walter',
            due: '12:00 pm',
            createdBy: 'Walter',
            list: '',
            timestamps: ''
        }),
    ]);
};
  
ReactDOM.render(React.createElement(App), document.getElementById('root'));
  