import React, { Component } from 'react';

class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.removeItem= this.removeItem.bind(this)
        this.addItem= this.addItem.bind(this)
    }

    removeItem(){
        this.props.onRemoveItem(this.props.item)
    }
    addItem(){
        this.props.onAddItem(this.props.item)
    }

    render() {
        return(
            <div className="App">
                {this.props.item.title}
                <a href={this.props.item.url}> Buka ></a>

                {this.props.noAdd ? null: <div onClick={this.addItem}>add</div>}

                <div onClick={this.removeItem}>remove</div>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default CardComponent;
