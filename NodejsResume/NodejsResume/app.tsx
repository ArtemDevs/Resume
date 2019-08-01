declare var require: any

import * as React from "react"
var ReactDOM = require('react-dom');

export class Hello extends React.Component<{}, { display : boolean }> {

    constructor(props) {
        super(props)
        this.state = {
            display:false
        }
    }

    displayWasClicked() {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to my Resume!</h1>  

                {
                    this.state.display ?
                    <div>
                    <iframe src="https://resume.creddle.io/embed/394d5ay1cex"
                                width="850" height="1100" seamless></iframe>
                        </div>
                        : null
                }        

                <button onClick={() => this.displayWasClicked()}>Display the Resume</button>
            </div>
        );
    }
}

// node_modules\.bin\webpack app.tsx --config webpack-config.js

ReactDOM.render(<Hello />, document.getElementById('root'));