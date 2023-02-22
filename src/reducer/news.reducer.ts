import { NewsState } from 'src/state/news.state';
import * as NewsAction from 'src/action/news.action'
import { createReducer, on } from '@ngrx/store';
const initialState : NewsState ={
  news : [],
  numberOfNews : 0,
  loading : false ,
  error : '',
  isSuccess : true ,

}

export const newsReducers = createReducer(
  initialState,
  on(NewsAction.getPaginate,(state)=>{
    return{...state,}
  }),
  on(NewsAction.getNewsSuccess,(state,action)=>{
    return{...state,news:action.news,loading:false,error:''}
  }),
  on(NewsAction.getNewsFail,(state,action)=>{
    return{...state,error: action.error,loading:false,isSuccess:false}
  }),
)

