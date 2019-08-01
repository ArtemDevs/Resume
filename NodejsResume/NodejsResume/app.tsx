declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <iframe src="https://resume.creddle.io/embed/394d5ay1cex"
                width="850" height="1100" seamless></iframe>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));