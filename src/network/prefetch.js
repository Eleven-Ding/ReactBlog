import request from "./index";

// 获取首页文章
export function getHomeArticlesPrefetch(limit, page, tag_id, isPrefetch = false) {
  if (tag_id === -1) {
    const params = {
      limit,
      page,
      type: 1,
    }
    return request({
      url: "/article/get_articles",
      params,
      cacheKey: `getHomeArticlesPrefetch-${JSON.stringify(params)}`,
      isPrefetch
    });
  } else {
    const params = {
      limit,
      page,
      type: 1,
      tag_id
    }
    //调用另外一个接口get_articles_tag
    return request({
      url: "/article/get_articles_tag",
      params,
      cacheKey: `getHomeArticlesPrefetch-${JSON.stringify(params)}`,
      isPrefetch
    });
  }
}



// 获取全部的 Tags
export function getAllTagsPrefetch(isPrefetch = false) {
  return request({
    url: "/tags/all_tags",
    method: "GET",
    cacheKey: 'getAllTagsPrefetch',
    isPrefetch
  });
}

// 获取用户位置
export function getPositionPrefetch(isPrefetch = false) {
  return request({
    url: `/user/get_position`,
    method: "GET",
    cacheKey: "getPositionPrefetch",
    isPrefetch
  })
}


function homPrefetch() {
  performance.mark('请求发出')
  getHomeArticlesPrefetch(8, 1, -1, true);
  getAllTagsPrefetch(true);
  getPositionPrefetch(true);
}

homPrefetch();