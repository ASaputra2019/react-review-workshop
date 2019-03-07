import React from 'react';
import List from './List.jsx';


// const App = (props) => {
//     return (
//         <span>
//           <div>Hello from Componenet</div>
//           <div>{props.first}</div>
//           <div>{props.last}</div>
//         </span>
//     );
// };

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            first: 'Albet',
            last: 'Saputra'
        }
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
    }

    handleFirst(e) {
        this.setState({
            first: e.target.value
        })
    }

    handleLast(e) {
        this.setState({
            last: e.target.value
        })
    }

    render() {
        return (
            <span>
                {this.state.first === 'Albert' && this.state.last ==='Saputra' ? (
                     <List />
                ): (
                    <div>
                        <div>Hello from Componenet</div>
                        <div>{this.state.first} {this.state.last}</div>
                        First Name: <input name="first" onChange={this.handleFirst} /> 
                        Last Name: <input name="last" onChange={this.handleLast} />
                        <br/>
                        <br/>
                    </div>
                ) }
         </span>
        );
    }
}

export default App;