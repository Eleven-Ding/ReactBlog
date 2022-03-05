import request from "./index";

//获取全部项目
export  function getProductions(){
  return request('/battle/get_all_production')
}