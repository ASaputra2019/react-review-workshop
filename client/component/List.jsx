import React from 'react';
import ListEntry from './ListEntry.jsx';


class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: 'xx',
            items: ['item1', 'item2', 'item3']
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleText(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleClick(e){
        alert(e)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.setState.text !== ''){
            this.setState({
                items: this.state.items.concat(this.state.text)
            });
            this.setState({text: ''}, document.getElementById('myForm').reset() );
        }
    }

    render() {
        return (
            <span>
                <form id='myForm' onSubmit={this.handleSubmit} >
                    Add to Array: <input name="text" onChange={this.handleText} />
                    <input name="submit" type="submit" />
                </form>
                <ul>{this.state.items.map( (txt, idx) => 
                <ListEntry 
                    item={txt} 
                    key={idx} 
                    hclick={this.handleClick}
                /> )}</ul>
            </span>
        );
    }
}

export default List;