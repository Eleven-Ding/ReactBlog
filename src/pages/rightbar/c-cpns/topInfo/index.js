import React, { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Divider } from "antd";
import { TopInfoWrap } from "./style";
import {
    EnvironmentOutlined,
    MailOutlined,
    QqOutlined,
    WechatOutlined,
} from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { changeBlogTheme } from "@/components/header/store/actionCreators";
import { BlogTheme } from "@/constant";
import { BlogThemeKeys } from "@/constant";
import { blogImgUrls } from "@/constant";
export default memo(function TopInfo() {
    //state
    const [rotate, setRotate] = useState(0);
    const [color, setColor] = useState("white")
    //hooks
    const dispatch = useDispatch();
    const { theme, globalConfig: { baseInfo = {
        avator: []
    } } } = SelfSelector({
        header: ["theme"],
        main: ['moveRight', 'username', 'screenWidth', 'globalConfig']
    });
    useEffect(() => {
        setColor(BlogTheme[theme].homeFontColor)
    }, [theme])

    const handleMouseOver = () => {
        if (rotate === 0) {
            setRotate(360);
        } else if (rotate === 360) {
            setRotate(0);
        }
        dispatch(changeBlogTheme(theme === BlogThemeKeys.DARKNORMAL ? BlogThemeKeys.NORMAL : BlogThemeKeys.DARKNORMAL))
    };

    return (
        <TopInfoWrap
            ThemeColor={BlogTheme[theme].ThemeColor}
            homeFontColor={color}
            rotate={rotate}
        >
            <div className="fixed_info">
                <img
                    className="my_avat"
                    onMouseOver={() => handleMouseOver()}
                    src={rotate === 0 ? baseInfo.avator[0] : baseInfo.avator[1]}
                    alt=""
                />

                <div className="person_name">DingShiYi</div>
                <div className="school_info">
                    <div>软件工程</div>
                    <div>2018-2022 学生</div>
                </div>
                <div className="person_info">
                    <div>
                        <EnvironmentOutlined /> 四川 - 自贡
                    </div>
                    <div>前端: React + Redux + Antd Design</div>
                    <div>后台: Vue + Element</div>
                    <div>后端: Node + Mysql</div>
                    <div>
                        <MailOutlined /> 1559298665@qq.com
                    </div>
                    <div className="dubai">有很多想去的地方</div>
                    <Divider orientation="center" style={{ color }}>
                        社交帐号
                    </Divider>
                    <div className="concat_ways">
                        <div>
                            <QqOutlined style={{ fontSize: "30px", color }} />
                            <img src={blogImgUrls.qq} alt="QQ"
                            />
                        </div>
                        <div >
                            <WechatOutlined style={{ fontSize: "30px", color }} />
                            <img src={blogImgUrls.wechat} alt="微信"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </TopInfoWrap>
    );
});