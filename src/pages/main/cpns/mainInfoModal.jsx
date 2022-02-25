/* eslint-disable jsx-a11y/alt-text */
import { Modal } from "antd";
import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { HeartFilled } from "@ant-design/icons";
import { message,Checkbox} from "antd";
import { changeBlogTheme } from "@/components/header/store/actionCreators";
import { BlogThemeKeys } from "@/constant";
import { blogImgUrls } from "@/constant";
import { HomeModalWrapper } from "./style";
export default memo(function MainInfoModal() {
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
    const onOk = useCallback(() => {
        setVisible(false);
        message.success("谢谢!!╭（′▽‵）╭,2022加油!!");
        dispatch(changeBlogTheme(BlogThemeKeys.DARKNORMAL))
    },[dispatch]);
    function onChange(e) {
        // 当前时间
        if(e.target.checked){
            localStorage.setItem('showMainModal',Date.now())
        }else{
            localStorage.removeItem('showMainModal')
        }
      }      
    return (
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
            <HomeModalWrapper>
                <p>2021-12-31 22:10:20</p>
                <p>新的一年，希望一切越来越好。</p>
                <img
                    src={blogImgUrls.homeModalPic1}
                />
                <img
                    src={blogImgUrls.homeModalPic2}
                />
                <span>
                    <p>
                        不要跟我谈理想，我的理想就是挣钱，挣很多的钱。
                    </p>
                    <p>(Tips:挣钱后就可以到处去旅行，去自己想去的地方✧٩(ˊωˋ*)و✧)</p>
                <Checkbox onChange={onChange}>三天内不展示当前弹窗</Checkbox>                
                </span>

            </HomeModalWrapper>
        </Modal>
    )
})