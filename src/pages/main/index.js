import React, { memo, Suspense, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { renderRoutes } from 'react-router-config';
import { ContentWrapper } from "./style";
import routes from "@/router";
import Loading from "@/components/loading/loading";
import Header from "@/components/header/header";
import RightBar from "../rightbar";
import {
    getIpAction,
} from "@/pages/about/store/actionCreators";
import {
    changMainMoveRight,
} from "./store/actionCreators";
import { Spin } from "antd";
import { changeUserName } from "@/pages/main/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { changeScreenWidth } from "./store/actionCreators";
import { debounce } from "@/utils/common";
import { getGlobleConfigPrefetch } from "../../network/prefetch";
import { changeGloabelConfig } from "./store/actionCreators";
import { LazyComponent } from "../../components/LazyComponent";

const BackTop = React.lazy(() => import("@/components/backTop/index"));
const LeftDrawer = React.lazy(() => import("@/components/drawer"));
const LoginPanel = React.lazy(() => import("@/components/loginPanel"));
const Footer = React.lazy(() => import("@/components/footer/footer"));

export default memo(function DSYMain() {
    const dispatch = useDispatch();
    const { loading, moveRight, showLogin, screenWidth } = SelfSelector({
        main: ['loading', 'moveRight', "showLogin", 'screenWidth']
    });
    useEffect(() => {
        const resize = debounce(function (e) {
            const width = e.target.innerWidth
            dispatch(changeScreenWidth(width))
        }, 100)
        dispatch(changMainMoveRight(true));
        window.addEventListener('resize', resize)
        const username = localStorage.getItem("username");
        dispatch(changeUserName(username));
        dispatch(getIpAction());
        // 获取全局配置
        getGlobleConfigPrefetch().then(res => {
            dispatch(changeGloabelConfig(res))
        })
        return _ => {
            window.removeEventListener('resize', resize)
        }
    }, [dispatch,]);
    return (
        <BrowserRouter>
            <LazyComponent>
                <BackTop />
            </LazyComponent>

            <LazyComponent>
                {showLogin && <LoginPanel />}
            </LazyComponent>
            <Header />
            <LazyComponent>
                {screenWidth < 800 && <LeftDrawer />}
            </LazyComponent>
            <ContentWrapper className="flex-wrap" moveRight={moveRight}>
                <div className="left-content">
                    <Spin
                        size="large"
                        style={{ top: "100px" }}
                        tip="Loading..."
                        spinning={loading}
                    >
                        <Suspense fallback={<Loading />}>
                            {renderRoutes(routes)}
                        </Suspense>
                    </Spin>
                </div>
                <div className="right-bar">
                    <RightBar />
                </div>
            </ContentWrapper>
            <LazyComponent>
                <Footer />
            </LazyComponent>
        </BrowserRouter >
    );
});
