import React, { memo, Suspense, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { renderRoutes } from 'react-router-config';
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
import { changeScreenWidth } from "./store/actionCreators";
import { debounce } from "@/utils/common";
import { getGlobleConfig } from "@/network/main";
import { changeGloabelConfig } from "./store/actionCreators";

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
        getGlobleConfig().then(res => {
            dispatch(changeGloabelConfig(res))
        })
        return _ => {
            window.removeEventListener('resize', resize)
        }

    }, [dispatch,]);

    return (
        <BrowserRouter>
            <BackTop />
            {showLogin && <LoginPanel />}
            <Header />
            {screenWidth < 800 && <LeftDrawer />}
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
