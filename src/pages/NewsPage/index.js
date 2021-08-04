import React, { Component } from 'react';
import {Link} from "react-router-dom";
import APIService from "../../api/service";

const apiSvc= new APIService()
class NewsPage extends Component {
    render() {
        return(
            <div className="App">
                Ini NewsPage
                <Link to='/bookmark'>Pindah</Link>
            </div>
        )
    }

    componentDidMount() {
        apiSvc.listNews().then(value => {
            console.dir(value)
        })
    }
}

export default NewsPage;
