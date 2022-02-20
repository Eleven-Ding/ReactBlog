import React, { memo, Suspense, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ContentWrapper } from "./style";
import routes from "@/router";
import Loading from "@/components/loading/loading";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RightBar from "../rightbar";
import LeftDrawer from "@/components/drawer";
import LoginPanel from "@/components/loginPanel";
import {
    getIpAction,
} from "@/pages/about/store/actionCreators";
import {
    changMainMoveRight,
} from "./store/actionCreators";
import { Spin } from "antd";
import { changeUserName } from "@/pages/main/store/actionCreators";
import BackTop from "@/components/backTop/index";
import { SelfSelector } from "@/utils/common";
import MainInfoModal from "./cpns/mainInfoModal";
export default memo(function DSYMain() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changMainMoveRight(true));
    }, [dispatch,]);
    const { loading, moveRight, showLogin } = SelfSelector({
        main: ['loading', 'moveRight', "showLogin"]
    });
    useEffect(() => {
        let username = localStorage.getItem("username");
        dispatch(changeUserName(username));
        dispatch(getIpAction());
        window.addEventListener("visibilitychange", function (e) {
            // TODO: 抽离每个的  判断再写 不用每个组件里面去写
            if (document.visibilityState === "hidden") {
                document.title = "呜呜呜,不要走!!∠( ᐛ 」∠)＿";
            } else {
                document.title = "嘿嘿,你回来啦~~╭（′▽‵）╭";
            }
        });
    }, [dispatch]);
    return (
        <BrowserRouter>
            {/* 手机端直接不渲染渲染 */}
            <BackTop />
            {/* TODO: LoginPanel 可以在这里判断是否渲染  LeftDrawer 在手机端才显示 */}
            {showLogin && <LoginPanel />}
            <Header />
            <LeftDrawer />
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
                        <RightBar />
                    </div>
                </ContentWrapper>
            </Suspense>
            <Footer />
            <MainInfoModal />
        </BrowserRouter>
    );
});
