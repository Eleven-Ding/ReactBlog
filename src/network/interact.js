import request from "./index";

//获取友链数据
export function getFriendLinks() {
    return request({
        url: "/friends/allLink",
        params: {
            type: 1,
        },
    });
}

//申请友链
export function applyLink(
    friendTitle,
    avaUrl,
    url,
    description,
    email,
    userId
) {
    return request({
        url: "/friends/add_friend",
        method: "post",
        data: {
            friendTitle,
            avaUrl,
            url,
            description,
            email,
            userId,
        },
    });
}
//获取留言评论
export function getComments() {
    return request({
        url: "/comment/article_comment",
        params: {
            article_id: -1,
        },
    });
}
//根据评论id点赞
export function updateComment(id) {
    return request({
        url: "/comment/update",
        method: "post",
        data: {
            id,
        },
    });
}
//获取热门评论
export function getHotComment() {
    return request(`/comment/all_comment?type=hot&page=1&limit=10`);
}

//删除评论
export function deleteComment({ id, userId, themeId }) {
    return request({
        url: "/comment/delete_comment",
        method: "post",
        data: {
            themeId,
            id,
            userId,
        },
    });
}