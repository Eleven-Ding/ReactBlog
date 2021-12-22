import { getBrowser, getOsInfo } from './getInfo'
import request from '../network/index'
const messageList = [];
//数据收集到达了20次才进行上报
const maxLength = 20;
//type 为上报的类型，content为上报的数据，可自定义，
export function report(type, content) {
    //收集数据的时间
    const time = Date.now();
    messageList.push({
            type,
            time,
            userInfo: getUserInfo(),
            content
        })
        //数据上报肯定很多，采用一次上报多个的方式，减少服务器压力
    if (messageList.length >= maxLength) {
        reportLog()
    }
}
export function reportLog() {
    const reportMessage = messageList.slice(0, maxLength);
    //为了防止其他人使用这个上报接口，可以在服务端全局校验referer或者host
    request({
        url: "/report",
        data: reportMessage,
        method: 'post'
    }).then(_ => {
        //截取
        messageList.splice(0, maxLength)
    }).cathc(_ => {
        throw new Error("本次数据上报失败,将在下次进行数据上报");
        //不进行截取，下次继续上报
        //考虑网络突然断开的问题？把数据存储到localStroage 下次进入页面进行检查上报?
    })
}

function getUserInfo() {
    return {
        ip: localStorage.getItem("ip") | "",
        userId: localStorage.getItem("userId") | "",
        emai: localStorage.getItem("email") | "",
        username: localStorage.getItem("username") | "",
        position: localStorage.getItem("position") | "",
        browser: getBrowser(),
        os: getOsInfo()
    }
}