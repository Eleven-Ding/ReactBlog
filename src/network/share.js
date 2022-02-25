import request from "./index";

export function addShare(params) {
  return request({
    url: "/share/add_share",
    method: "post",
    data: params,
  });
}




//获取分享列表
export function getShare(limit, page, type = 0, access = 1) {
  return request(`/share/query_share?limit=${limit}&page=${page}&type=${type}&access=${access}`)
}


//根据id获取分享


export function getShareDetail(id) {
  return request(`/share/query_one_share?id=${id}`)
}

//根据id  点赞

export function updateLike(id) {
  return request({
    url: '/share/update_share_like',
    method: 'post',
    data: {
      id
    }
  })
}