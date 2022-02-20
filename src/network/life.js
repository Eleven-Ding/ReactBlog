import request from "./index";


//获取全部的时间线
export function getAllTime() {
  return request("/music/get_all_time");
}

//获取热门文章
export function getHotArticle() {
  return request("/article/hot_articles");
}


export function getPosition() {
  return request(`/user/get_position`)
}
