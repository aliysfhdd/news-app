import React, { Component } from 'react';
import APIService from "../../api/service";
import CardComponent from "../../components/Card";
import {newsConverter, getCategories} from "./utils";
import Loading from "../../components/Loading";

const apiSvc= new APIService()
class NewsPage extends Component {
    state = {
        bookmark: [],
        news:[],
        originalNews:[],
        counter:10,
        loading:true,
        categories:[],
        category:null
    };

    addToBookmark = (item) => {
        item.marked=true
        let listBookmark=this.state.bookmark
        if(listBookmark.filter(value => {return value.id===item.id}).length===0) {
            listBookmark= listBookmark.concat(item)
            this.setState({ bookmark: listBookmark });
            localStorage.setItem('bookmark', JSON.stringify(listBookmark));
        }
    }

    removeFromBookmark = (item) => {
        item.marked=false
        let listBookmark=this.state.bookmark
        listBookmark= listBookmark.filter(value => {return value.id!==item.id})
        this.setState({ bookmark: listBookmark});
        localStorage.setItem('bookmark', JSON.stringify(listBookmark));
    }

    changeCategory = (category)=>{
        let listNews= this.state.originalNews.filter(value => {
            return value.categories===category
        })
        this.setState({news: listNews.slice(0,10)})
        this.setState({counter:0})
        this.setState({category:category})
    }
    loadMore =()=>{
        let counter= this.state.counter+10
        this.setState({counter: counter})
        if(this.state.category!=null){
            this.setState({news: this.state.originalNews.filter(value => {return value.categories===this.state.category}).slice(0,counter)})
        }
        else{
            this.setState({news: this.state.originalNews.slice(0,counter)})
        }

    }
    renderNews = () =>{
        return (
            <React.Fragment>
                <div className='container nav'>
                    <ul className='navbar'>
                        {this.state.categories.map((value,idx) => {
                            return <li onClick={()=>this.changeCategory(value)} key={idx} className={this.state.category===value ? 'navitem active':'navitem'}>{value}</li>
                        })}
                    </ul>
                </div>
                <div className='container list-news'>
                    {this.state.news.map((value,idx) => {
                        return <CardComponent key={idx}
                                              item={value} onAddItem={this.addToBookmark}
                                              onRemoveItem={this.removeFromBookmark}/>
                    })}
                    {this.state.news.length===0 ?
                        <div style={{textAlign:'center'}}> No Data
                    </div>:
                        <button onClick={this.loadMore} className='btn btn__load'>
                            Load More
                        </button>
                    }
                    </div>
            </React.Fragment>

        )
    }

    render() {
        return(
            <div className="App">
                {this.state.loading ? <Loading/>: this.renderNews()}
            </div>
        )
    }

    async componentDidMount() {
        let cleanNews=await apiSvc.getListNews()
        const categoryNews= getCategories(cleanNews)
        cleanNews= newsConverter(cleanNews)
        this.setState({categories:categoryNews})
        this.setState({originalNews:cleanNews})
        this.setState({news:cleanNews.slice(0,this.state.counter)})
        if(localStorage.getItem('bookmark')!==null){
            let listBookmark=JSON.parse(localStorage.getItem('bookmark'))
            this.setState({bookmark:listBookmark})
        }
        this.setState({loading:false})
    }

}


export default NewsPage;
