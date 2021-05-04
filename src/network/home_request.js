import request from "./index";

export function getHomeArticles(limit, page, tag_id) {
  if (tag_id == -1) {
    return request({
      url: "/article/get_articles",
      params: {
        limit,
        page,
        type: 1,
      },
    });
  }else{
    //调用另外一个接口get_articles_tag
    return request({
      url: "/article/get_articles_tag",
      params: {
        limit,
        page,
        type: 1,
        tag_id
      },
    });
  }
}


//根据根据title获取文章列表
export function getArticlesAByTitle(title){
  return request(`/article/getArticles_by_title?title=${title}`)
}