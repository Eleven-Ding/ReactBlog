import React, { memo, Suspense, useEffect, useState } from "react";
import { Modal, message } from "antd";
import {
    changeHeaderBackColorAction,
    changeHeaderFontColorAction,
    changeHeaderHoverColorAction,
} from "@/components/header/store/actionCreators";
import { changeHomeFontColor } from "@/pages/home/store/actionCreators";
import { HeartFilled } from "@ant-design/icons";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ContentWrapper } from "./style";
import routes from "@/router";
import Loading from "../../components/loading/loading";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getRightTagsAction } from "../rightbar/store/actionCreators"
import RightBar from "../rightbar";
import LeftDrawer from "@/components/drawer";
import LoginPanel from "@/components/loginPanel";
// import Cube from '@/components/cube'
import { getHomeArticlesAction } from "../home/store/actionCreators";
import {
    getIpAction,
} from "../about/store/actionCreators";
import {
    changMainMoveRight,
} from "./store/actionCreators";
import { Spin } from "antd";
import { changeUserName } from "@/pages/main/store/actionCreators";
import BackTop from "@/components/backTop/index";
import Preview from "../../components/preview/index";
// const BackTop = React.lazy(_ => import("@/components/backTop/index"))
export default memo(function DSYMain() {
    const { currentPage, tag_id } = useSelector(
        (state) => ({
            currentPage: state.getIn(["home", "currentPage"]),
            tag_id: state.getIn(["home", "tag_id"]),
        }),
        shallowEqual
    );
    const [visible, setVisible] = useState(true);
    const limit = 8;
    const dispatch = useDispatch();


    useEffect(() => {

    }, [dispatch]);
    useEffect(() => {
        //获取首页文章列表
        dispatch(changMainMoveRight(true));
        dispatch(getHomeArticlesAction(limit, currentPage, tag_id)); //这个-1就是tag_id;
    }, [currentPage, dispatch, tag_id]);
    const { loading, moveRight } = useSelector(
        (state) => ({
            loading: state.getIn(["main", "loading"]),
            moveRight: state.getIn(["main", "moveRight"]),

        }),
        shallowEqual
    );

    useEffect(() => {
        let username = localStorage.getItem("username");
        dispatch(changeUserName(username));
        dispatch(getIpAction());
        // dispatch(getCurrentSongAction(487885426));
        dispatch(getRightTagsAction());
        window.addEventListener("visibilitychange", function (e) {
            if (document.visibilityState == "hidden") {
                document.title = "呜呜呜,不要走!!∠( ᐛ 」∠)＿";
            } else {
                document.title = "嘿嘿,你回来啦~~╭（′▽‵）╭";
            }
        });
    }, [dispatch]);

    const onOk = () => {
        setVisible(false);
        message.success("谢谢!!╭（′▽‵）╭,2021加油!!");
        dispatch(changeHeaderBackColorAction("rgb(40,54,70)"));
        dispatch(changeHeaderFontColorAction("#B4B9BE"));
        dispatch(changeHeaderHoverColorAction("white"));
        dispatch(changeHomeFontColor("#1890FF"));
    };
    return (
        <BrowserRouter>
            {/* <Preview></Preview> */}

            <BackTop></BackTop>
            <LoginPanel></LoginPanel>
            <Header />
            {/* <Cube></Cube> */}
            <LeftDrawer></LeftDrawer>
            <Suspense fallback={<Loading />}>
                <ContentWrapper className="flex-wrap" moveRight={moveRight}>
                    <div className="left-content">
                        <Spin
                            size="large"
                            style={{ top: "100px" }}
                            tip="Loading..."
                            spinning={loading}
                        >
                            {renderRoutes(routes)}
                        </Spin>
                    </div>
                    <div className="right-bar">
                        <RightBar></RightBar>
                    </div>
                </ContentWrapper>
            </Suspense>
            <Footer />
            <Modal
                centered="true"
                title={
                    <span style={{ color: "red" }}>
                        Welcome ! <HeartFilled />
                    </span>
                }
                visible={visible}
                onOk={() => onOk()}
                onCancel={() => setVisible(false)}
                cancelText="略过"
                okText="加油 !"
            >
                <p>2021-12-31 22:10:20</p>
                <p>新的一年，希望一切越来越好。</p>
                <img
                    style={{ width: "50%" }}
                    src="
          https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640959677473.JPEG2000"
                    alt=""
                />
                <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640960246399.JPEG2000" alt=""  style={{ width: "50%" }} />
                {/* <p>珍惜所有的不期而遇，看淡任何的不辞而别...</p> */}
                <span
                    style={{
                        color: "#8B8B8B",
                        fontSize: "12px",
                        marginTop: "10px",
                        display: "block",
                    }}
                >
                    <p>
                        不要跟我谈理想，我的理想就是挣钱，挣很多的钱。
                    </p>
                    (Tips:挣钱后就可以到处去旅行，去自己想去的地方✧٩(ˊωˋ*)و✧)
                </span>
            </Modal>
        </BrowserRouter>
    );
});
