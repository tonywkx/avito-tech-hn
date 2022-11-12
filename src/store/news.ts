import { Dispatch } from "react"
import { loadNewsAction } from "../reducer"

export const fetchNews = () => {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch(loadNewsAction(json)))
    }
}