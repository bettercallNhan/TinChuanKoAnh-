
export interface News {
  id : number;
  user:{
    name: string;
    profile_image_90 : string;
  }
  title : string;
  description: string
  readable_publish_date: string;
  url : string;
  social_image : string;
}
