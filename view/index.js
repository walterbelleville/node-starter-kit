let React = require('react');
let ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

ReactDOM.render(<MyComponent />, node);