import React, { memo, useState, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Divider } from "antd";
import { TopInfoWrap } from "./style";
import {
    EnvironmentOutlined,
    MailOutlined,
    QqOutlined,
    WechatOutlined,
} from "@ant-design/icons";
import {
    changeHeaderBackColorAction,
    changeHeaderFontColorAction,
    changeHeaderHoverColorAction,
} from "@/components/header/store/actionCreators";
import { changeHomeFontColor } from "@/pages/home/store/actionCreators";
export default memo(function TopInfo() {
    //state
    const [rotate, setRotate] = useState(0);
    const Qref = useRef();
    const Wref = useRef()
        //hooks
    const dispatch = useDispatch();
    const { ThemeColor, homeFontColor } = useSelector(
        (state) => ({
            ThemeColor: state.getIn(["header", "ThemeColor"]),
            homeFontColor: state.getIn(["home", "homeFontColor"]),
            HoverColor: state.getIn(["header", "HoverColor"]),
        }),
        shallowEqual
    );

    const handleMouseOver = () => {
        if (rotate === 0) {
            setRotate(360);
        } else if (rotate === 360) {
            setRotate(0);
        }
        dispatch(
            changeHeaderBackColorAction(
                rotate === 0 ? "rgb(40,54,70)" : "#55b59a"
            )
        );
        dispatch(changeHeaderFontColorAction(rotate === 0 ? "#B4B9BE" : "white"));
        dispatch(changeHeaderHoverColorAction(rotate === 0 ? "white" : "#1890FF"));
        dispatch(changeHomeFontColor(rotate === 0 ? "#1890FF" : " #209d7b"));
        //切换header颜色
    };
    //other handle
    //定时器
    const handleMouseEnter = (type) => {
        if (type === 1) {
            Qref.current.src = "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/qq.png"
        } else {
            Wref.current.src = "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/wechat.jpg"
        }
        console.log(type);
    }
    return ( <
        TopInfoWrap ThemeColor = { ThemeColor }
        homeFontColor = { homeFontColor }
        rotate = { rotate } >
        <
        div className = "fixed_info" >
        <
        img className = "my_avat"
        onMouseOver = {
            () => handleMouseOver()
        }
        src = {
            rotate === 0 ?
            "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1619835493645.JPEG2000" : "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1617257611802.JPEG2000"
        }
        alt = "" /
        >

        <
        div className = "person_name" > DingShiYi < /div> <
        div className = "school_info" >
        <
        div > 软件工程 < /div> <
        div > 2018 - 2022 学生 < /div> < /
        div > <
        div className = "person_info" >
        <
        div >
        <
        EnvironmentOutlined / > 四川 - 自贡 <
        /div> <
        div > 前端: React + Redux + Antd Design < /div> <
        div > 后台: Vue + Element < /div> <
        div > 后端: Node + Mysql < /div> <
        div >
        <
        MailOutlined / > 1559298665 @qq.com <
        /div> <
        div className = "dubai" > 有很多想去的地方 < /div> <
        Divider orientation = "center"
        style = {
            { color: homeFontColor }
        } >
        社交帐号 <
        /Divider> <
        div className = "concat_ways" >
        <
        div onMouseEnter = {
            () => handleMouseEnter(1)
        } >
        <
        QqOutlined style = {
            { fontSize: "30px", color: homeFontColor }
        }
        />{" "} <
        img ref = { Qref }
        src = ""
        alt = "QQ" /
        >
        <
        /div>

        <
        div onMouseEnter = {
            () => handleMouseEnter(2)
        } >
        <
        WechatOutlined style = {
            { fontSize: "30px", color: homeFontColor }
        }
        />{" "} <
        img ref = { Wref }

        src = ""
        alt = "微信" /
        >
        { " " } <
        /div> < /
        div > <
        /div> < /
        div > <
        /TopInfoWrap>
    );
});