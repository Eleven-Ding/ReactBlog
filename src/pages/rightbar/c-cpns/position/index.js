import React, { memo } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";

export default memo(function Position() {
    let { theme, position, ip } = SelfSelector({
        about: ['position', 'ip', 'time'],
        header: "theme"
    });

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
            </div>
        </PositionWrap>
    );
});