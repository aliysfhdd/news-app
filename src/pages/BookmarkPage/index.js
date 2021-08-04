import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BookmarkPage extends Component {
    render() {
        return(
            <div className="App">
                Ini Bookmark
                <Link to='/'>Pindah</Link>
            </div>
        )
    }
}

export default BookmarkPage;
