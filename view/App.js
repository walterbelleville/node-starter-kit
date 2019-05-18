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
        React.createElement(List, {
            name: 'Walk dog',
            description: 'Walk the dog',
            createdBy: 'Walter',
            timestamps: '12:00 pm'
        }),
    ]);
};
  
ReactDOM.render(React.createElement(App), document.getElementById('root'));
  