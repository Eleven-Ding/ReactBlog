import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { getTextByCurrentTime } from "@/utils/format";
import { BlogTheme } from "@/constant";
export default memo(function Position() {
    const [message, setMessage] = useState("");
    let { theme, position, ip, time } = SelfSelector({
        about: ['position', 'ip', 'time'],
        header: "theme"
    });
    useEffect(() => {
        setMessage(getTextByCurrentTime(time))
    }, [time]);

    return (
        <PositionWrap homeFontColor={BlogTheme[theme].homeFontColor}>
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