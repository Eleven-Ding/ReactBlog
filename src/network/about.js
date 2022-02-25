import request from "./index";
export function getAbout() {
  return request('/admin/aboutMe?type=1')
}

//获取技能点
export function getSkills() {
  return request('/admin/get_skills')
}