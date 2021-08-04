import NewsPage from "./pages/NewsPage";
import BookmarkPage from "./pages/BookmarkPage";
import {Route} from "react-router-dom";
import React from "react";

const listRoute=[
        {
            path: '/',
            component: NewsPage
        },
        {
            path: '/bookmark',
            component: BookmarkPage
        },
    ]

export default function routes(){
    return listRoute.map((route,idx) => {
        return <Route key={idx} exact path={route.path} component={route.component}/>
    })
}

