import React, { memo, useState, useRef } from "react";
import { useDispatch } from "react-redux";
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
import { SelfSelector } from "@/utils/common";
export default memo(function TopInfo() {
    //state
    const [rotate, setRotate] = useState(0);
    const Qref = useRef();
    const Wref = useRef()
    //hooks
    const dispatch = useDispatch();
    // TODO: 能否把这些color都搞到一个地方去啊 好麻烦啊
    const { ThemeColor, homeFontColor } = SelfSelector({
        header: ['ThemeColor', 'HoverColor'],
        home: 'homeFontColor'
    });

    const handleMouseOver = () => {
        if (rotate === 0) {
            setRotate(360);
        } else if (rotate === 360) {
            setRotate(0);
        }
        dispatch(
            changeHeaderBackColorAction(
                rotate === 0 ? "rgb(40,54,70)" : "rgb(85, 181, 154)"
            )
        );
        dispatch(changeHeaderFontColorAction(rotate === 0 ? "#B4B9BE" : "white"));
        dispatch(changeHeaderHoverColorAction(rotate === 0 ? "white" : "#1890FF"));
        dispatch(changeHomeFontColor(rotate === 0 ? "#1890FF" : "rgb(32, 157, 123)"));
    };

    // TODO: 这些都加上缩略图处理
    const handleMouseEnter = (type) => {
        if (type === 1) {
            Qref.current.src = "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/qq.png?imageView2/1/w/100/q/80"
        } else {
            Wref.current.src = "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/wechat.jpg?imageView2/1/w/100/q/80"
        }
    }
    return (
        <TopInfoWrap
            ThemeColor={ThemeColor}
            homeFontColor={homeFontColor}
            rotate={rotate}
        >
            <div className="fixed_info">
                <img
                    className="my_avat"
                    onMouseOver={() => handleMouseOver()}
                    src={
                        rotate === 0
                            ? "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1619835493645.JPEG2000?imageView2/1/q/80"
                            : "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1643517307076.JPEG2000?imageView2/1/w/200/q/80"
                    }
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
                    <Divider orientation="center" style={{ color: homeFontColor }}>
                        社交帐号
                    </Divider>
                    <div className="concat_ways">
                        <div onMouseEnter={() => handleMouseEnter(1)}>
                            <QqOutlined
                                style={{ fontSize: "30px", color: homeFontColor }}
                            />{" "}
                            <img
                                ref={Qref}
                                src=""
                                alt="QQ"
                            />
                        </div>

                        <div onMouseEnter={() => handleMouseEnter(2)}>
                            <WechatOutlined
                                style={{ fontSize: "30px", color: homeFontColor }}
                            />{" "}
                            <img
                                ref={Wref}

                                src=""
                                alt="微信"
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </TopInfoWrap>
    );
});