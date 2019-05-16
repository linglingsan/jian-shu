import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

interface HomeProps {
    topicList: []
    articleList: []
    recommendList: []
}

const changeHomeData = (result: HomeProps) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list: [], nextPage: number) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch: any) => {
        axios.get('/api/home.json')
            .then(res => {
                const result = res.data.data
                dispatch(changeHomeData(result))
            })
    }
}

export const getMoreList = (page: number) => {
    return (dispatch: any) => {
        axios.get(`/api/homeList.json?page=${page}`)
            .then(res => {
                const result = res.data.data;
                dispatch(addHomeList(result, page + 1))
            })
    }
}