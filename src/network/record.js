import request from "./index";

//发送邮箱验证码
export function getRecordInfo(){
   return request({
     url:'/record/getInfo'
   })
}