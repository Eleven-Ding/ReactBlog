import request from "./index";

//发送邮箱验证码
export function getRecordInfo(page, limit) {
  return request({
    url: `/record/getInfo?page=${page}&limit=${limit}`
  })
}

//删除图片
export function deletePic({userId, id}) {
  return request({
    url: 'record/deletePct',
    method: "post",
    data: {
      userId,
      id
    }
  })
}