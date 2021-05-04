import axios from "axios";
import request from "./index";
//获取歌曲详情
export function getSongDetail(ids) {
  return axios.get(`https://www.dingshiyi.top:8001/song/detail?ids=${ids}`);
}
//获取歌词
// http://47.98.47.212:8001/lyric?id=33894312
export function getSongLyric(id) {
  return axios.get(`https://www.dingshiyi.top:8001/lyric?id=${id}`);
}

//获取全部的歌曲
export function getAllSongs() {
  return request({
    url: "/music/get_song_list",
  });
}

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
