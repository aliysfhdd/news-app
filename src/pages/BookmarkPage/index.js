import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CardComponent from "../../components/Card";

class BookmarkPage extends Component {
    state = {
        bookmark: [],
    };


    removeFromBookmark = (item) => {
        let listBookmark=this.state.bookmark
        listBookmark= listBookmark.filter(value => {return value!==item})
        this.setState({ bookmark: listBookmark});
        localStorage.setItem('bookmark', JSON.stringify(listBookmark));
    }

    render() {
        return(
            <div className="App">
                Ini Bookmark <Link to='/'>Pindah</Link>
                {this.state.bookmark.map((value,idx) => {
                    return<CardComponent noAdd={true}key={value.id}
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
