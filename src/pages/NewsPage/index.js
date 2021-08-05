import React, { Component } from 'react';
import {Link} from "react-router-dom";
import APIService from "../../api/service";
import CardComponent from "../../components/Card";

const apiSvc= new APIService()
class NewsPage extends Component {
    state = {
        bookmark: [],
        news:[]
    };

    addToBookmark = (item) => {
        let listBookmark=this.state.bookmark
        if(listBookmark.filter(value => {return value===item}).length===0) {
            listBookmark= listBookmark.concat(item)
            this.setState({ bookmark: listBookmark });
            localStorage.setItem('bookmark', JSON.stringify(listBookmark));
        }
    }

    removeFromBookmark = (item) => {
        let listBookmark=this.state.bookmark
        listBookmark= listBookmark.filter(value => {return value!==item})
        this.setState({ bookmark: listBookmark});
        localStorage.setItem('bookmark', JSON.stringify(listBookmark));
    }

    render() {
        return(
            <div className="App">
                Ini NewsPage <Link to='/bookmark'>Pindah</Link>
                {this.state.news.map((value,idx) => {
                    return <CardComponent key={idx}
                                          item={value} onAddItem={this.addToBookmark}
                                          onRemoveItem={this.removeFromBookmark}/>
                })}

            </div>
        )
    }

    componentDidMount() {
        apiSvc.listNews().then(value => {
            const rawData = value.data.result.categories
            const data = flatten(rawData.map(item => {
                return item.templates.filter(el => {
                        return el.type !== 56 && el.type !== 73
                    })
            }))
            const news= flatten(data.map(el => {
                return el.sections.map(section => {
                    return section.articles
                })[0]
            }))

            const cleanNews= news.map(
                art=>{
                    return {
                        id:art.id,
                        categories:art.categoryName,
                        title:art.title,
                        url:art?.url?.url,
                        publisher: art.publisher,
                    }
                }
            )
            this.setState({news:cleanNews.slice(0,10)})
        })
        if(localStorage.getItem('bookmark')!==null){
            let listBookmark=JSON.parse(localStorage.getItem('bookmark'))
            this.setState({bookmark:listBookmark})
        }
    }

}
function flatten(array){
    return [].concat.apply([], array)
}


export default NewsPage;
