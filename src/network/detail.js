import request from "./index";

export function getArticleDetail(article_id) {
  return request({
    url: "/article/get_one_article",
    params: {
      article_id,
    },
  });
}

export function getArticleDetailPrefetch(article_id, isPrefetch = false) {
  return request({
    url: "/article/get_one_article",
    params: {
      article_id,
    },
    cacheKey: `getArticleDetailPrefetch-${article_id}`,
    isPrefetch
  })
}

export function changeArticleReadingCount(article_id) {
  return request({
    method: "post",
    url: "/article/updateViewCount",
    data: {
      article_id,
    },
  });
}

export function getArticleComment(article_id, type = 0, limit, page) {
  return request({
    url: "/comment/article_comment",
    params: {
      article_id,
      type,
      limit,
      page,
    },
  });
}

export function addComment(config) {
  return request({
    url: "/comment/add_comment",
    method: "post",
    data: {
      themeId: config.themeId,
      comment: config.comment,
      fatherId: config.fatherId,
      userId: config.userId,
      levelId: config.levelId,
      area: config.area,
      email: config.email, //使用者的邮箱,
      qq: config.qq, //被回复人的邮箱
      aimComment: config.aimComment,
      type: config.type, //是普通评论还是share页面的,
      type3: config.type3
    },
  });
}
