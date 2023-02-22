import { createAction,props } from "@ngrx/store"
import { News } from "src/app/news.model";

export const getNewsSuccess = createAction('[News] Get News Success',props<{news:News[]}>());
export const getNewsFail = createAction('[News] Get News Fail',props<{error: string}>());

export const getPaginate = createAction('[News] Get Paginate',props<{page:number,per_page:number}>());
