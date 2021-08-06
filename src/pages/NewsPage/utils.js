export function newsConverter(listData){
    let listBookmark=[]
    if(localStorage.getItem('bookmark')!==null){
        listBookmark=JSON.parse(localStorage.getItem('bookmark'))
    }
    const rawData = listData.data.result.categories
    const data = rawData.map(item => {
        return item.templates.filter(el => {
            // Remove ads & recommender category article (empty article)
            return el.type !== 56 && el.type !== 73
        })
    }).flat()
    const news = data.map(el => {
        return el.sections.map(section => {
            return section.articles
        })[0]
    }).flat()

    return news.filter(art => {
        //Remove non unique id & unreadable news
        return art.id !== 0 && art.source !== "POLL" && art.publisher
    }).map(
        art => {
            return {
                id: art.id,
                categories: art?.categoryName || 'Other',
                title: art.title,
                url: art?.url?.url,
                publisher: art.publisher,
                image: art?.thumbnail?.type==="IMAGE" ? "https://obs.line-scdn.net/"+art?.thumbnail.hash : "https://img.icons8.com/plasticine/100/000000/image.png",
                marked: listBookmark.filter(value => {return value.id===art.id}).length>=1
            }
        }
    )
}

export function getCategories(listData){
    const rawData = listData.data.result.categoryList
    return rawData.map(item => {
        return item.name})
}


