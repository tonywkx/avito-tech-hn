import { IProduct } from "../models";

export const initialState: {news: IProduct[]} = {
    news: [{by: '',
        descendants: 0,
        id: 0,
        kids: [],
        score: 0,
        text: '',
        time: 0,
        title: '',
        type: '',
        url: ''
    }],
}

const ADD_NEWS = 'ADD_NEWS';

export const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case ADD_NEWS: 
            return {...state, news: [...state.news, ...action.payload as IProduct[]]}
        
        default:
            return state
    }
}

export const loadNewsAction = (payload: any) => ({type: ADD_NEWS, payload}) 