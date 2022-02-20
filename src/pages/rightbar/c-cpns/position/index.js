import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
export default memo(function Position() {
    const [message, setMessage] = useState("");
    let { homeFontColor, time, position, ip } = SelfSelector({
        about: ['time', 'position', 'ip'],
        home: "homeFontColor"
    });
    useEffect(() => {
        // TODO: 这里的time为什么没有变化
        if (time) {
            const currentTime = time.substr(10, 10);
            if (currentTime.includes("上午")) {
                if (parseInt(currentTime.substr(2, 2)) <= 10) {
                    setMessage("早上好啊！昨晚有休息好吗？");
                } else {
                    setMessage("今天中午一定要吃的饱饱的！");
                }
            } else {
                if (parseInt(currentTime.substr(2, 2)) <= 9)
                    setMessage("累了一天了,我相信你一定会越来越强的!");
                else {
                    setMessage("如果太晚了,就看看电视,早点休息吧~~");
                }
            }
        }
    }, [time]);

    return (
        <PositionWrap homeFontColor={homeFontColor}>
            <div className="your_words" style={{ color: "rgb(32, 157, 123)" }}>
                相见恨晚
                <HeartOutlined />
            </div>
            <div className="YourInfo">
                <div>
                    您的Ip： <span>{ip}</span>
                </div>
                <div>
                    您的地址： <span>{position}</span>
                </div>
                <div>
                    您好，现在是：<span>{time}</span> 。<span> {message}</span>
                </div>
            </div>
        </PositionWrap>
    );
});