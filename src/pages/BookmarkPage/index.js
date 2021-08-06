import React, { Component } from 'react';
import CardComponent from "../../components/Card";

class BookmarkPage extends Component {
    state = {
        bookmark: [],
    };


    removeFromBookmark = (item) => {
        item.marked=false
        let listBookmark=this.state.bookmark
        listBookmark= listBookmark.filter(value => {return value!==item})
        this.setState({ bookmark: listBookmark});
        localStorage.setItem('bookmark', JSON.stringify(listBookmark));
    }

    render() {
        return(
            <div className="container list-news">
                {this.state.bookmark.map((value,idx) => {
                    return<CardComponent noAdd={true}key={idx}
                                         item={value} onAddItem={this.addToBookmark} onRemoveItem={this.removeFromBookmark}/>
                })}

            </div>
        )
    }

    componentDidMount() {
        if(localStorage.getItem('bookmark')!==null){
            let listBookmark=JSON.parse(localStorage.getItem('bookmark'))
            this.setState({bookmark:listBookmark})
        }
    }
}

export default BookmarkPage;
