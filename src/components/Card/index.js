import React, { Component } from 'react';

class CardComponent extends Component {
    toggleBookmark =()=>{
        if(this.props.item.marked){
            this.props.onRemoveItem(this.props.item)
        }
        else{
            this.props.onAddItem(this.props.item)
        }
    }

    render() {
        return(
            <div className="card card__news">
                <div  className="card__section--thumbnail">
                    <figure className="card__image"
                            data-src={this.props.item.image}
                            lazy="loaded"
                            style={{"backgroundImage":`url(${this.props.item.image})`}}/>
                </div>
                <div className="card__section--desc">
                            <span className="card__news--title">
                                               {this.props.item.title}
                            </span>
                    <div className="card__news--publisher">
                        <span className="articleCard-description text text--f text--primary text--regular text--ellipsis1">{this.props.item.publisher}</span>
                    </div>

                    <div className="card__news--footer">
                        <a className='btn__read' href={this.props.item.url} target='_blank' rel="noreferrer" >
                            Baca >
                        </a>
                        <button className='btn btn__bookmark--icon' onClick={this.toggleBookmark}>
                            <i className="fa fa-bookmark" style={this.props.item.marked ? {color:'gold'}:null}/>
                        </button>
                    </div>
                </div>
            </div>

        )
    }

}

export default CardComponent;
