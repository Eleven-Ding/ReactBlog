import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { getTextByCurrentTime } from "@/utils/format";
export default memo(function Position() {
    const [message, setMessage] = useState("");
    let { homeFontColor, position, ip, time } = SelfSelector({
        about: ['position', 'ip', 'time'],
        home: "homeFontColor"
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setMessage(getTextByCurrentTime(time))
        }, 1000)
        return _ => {
            clearInterval(timer)
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
                    <span> 您好，现在是：</span>
                    <span>{time}。</span>
                    <span> {message}</span>
                </div>
            </div>
        </PositionWrap>
    );
});