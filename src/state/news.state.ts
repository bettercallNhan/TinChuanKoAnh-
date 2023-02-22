import { News } from "src/app/news.model";

export interface NewsState{
  news : News[],
  numberOfNews : number,
  loading : boolean ,
  error : string,
  isSuccess : boolean ,

}
