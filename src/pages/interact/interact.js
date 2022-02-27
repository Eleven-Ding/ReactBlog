/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from "react";

import { Button, Input, message, Switch } from "antd";
import { useDispatch } from "react-redux";
import { getArticleCommentListAction } from "@/pages/detail/store/actionCreators";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { InteractWrap } from "./style";
import { applyLink } from "@/network/interact";
import { addComment } from "@/network/detail";
import FrendsLinks from "./c-cpns/friends";
import Comment from "@/components/comment/index";
import {
    getFriendLinksAction,
} from "@/pages/interact/store/actionCreators";
import {
    getHotCommentsAction,
} from "@/pages/interact/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
import CommentInputWrap from "@/components/commentInputWrap";
const { TextArea } = Input;
export default memo(function Interact() {
    //state
    const [friendTitle, setFriendTitle] = useState("");
    const [avaUrl, setavaUrl] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [ban, setBan] = useState(true);
    //是否发送邮箱
    const [type, setType] = useState(false);
    //分页 每一页的数据
    const [limit, setLimit] = useState(11);


    //先获取友情链接
    const dispatch = useDispatch();
    //获取友情链接的数据
    const { friends, commentList, theme } = SelfSelector({
        interact: "friends",
        detail: 'commentList',
        header: 'theme'
    });
    useEffect(() => {
        dispatch(changMainMoveRight(true));
        if (friends.length === 0)
            dispatch(getFriendLinksAction());
        dispatch(getHotCommentsAction())
    }, [dispatch]);
    useEffect(() => {
        dispatch(getArticleCommentListAction(-1, 0, limit, 1));
    }, [dispatch]);


    //otherHandle
    const apply_link = useCallback(() => {
        const userId = localStorage.getItem("userId");
        applyLink(friendTitle, avaUrl, url, description, email, userId).then(
            (res) => {
                const type = res.data.type;
                const Message = res.message;
                if (type) {
                    setFriendTitle("");
                    setavaUrl("");
                    setUrl("");
                    setDescription("");
                    setEmail("");
                    message.success(Message);
                } else {
                    message.error(Message);
                }
            }
        );
    }, []);
    const submitComment = () => {
        setBan(false);
        addComment({
            themeId: -1,
            comment,
            fatherId: -1,
            userId: localStorage.getItem("userId"),
            levelId: -1,
            type,
            area: localStorage.getItem("position"),
        }).then((res) => {
            const Message = res.message;
            const type = res.data.type;
            if (type) {
                //重新发一次请求
                dispatch(getArticleCommentListAction(-1, 0, limit, 1));
                message.success(Message);
                setComment("");
            } else {
                message.error(Message);
            }
            setBan(true);
        });
    };
    const TextAreaChange = (e) => {
        setComment(e.target.value);
    };
    const handleSwitchChange = (e) => {
        setType(e);
        if (e) {
            message.success("此留言会通过邮箱提醒博主~");
        }
    };

    const showMoreComment = useCallback(() => {
        dispatch(getArticleCommentListAction(-1, 0, limit + 11, 1));
        setLimit(limit + 11);
    }, [limit]);
    return (
        <InteractWrap>
            <div className="center_wrap">
                <h1 className="link_title">友情链接</h1>
                <p className="link_title">(顺序随机,不分先后)</p>
                <hr className="parting-line" />
                <FrendsLinks friends={friends}></FrendsLinks>
                <h2 className="link_title">欢迎各位大佬交换友链~~~</h2>

                <div className="apply_link">
                    <Input
                        value={friendTitle}
                        className="input"
                        onChange={(e) => setFriendTitle(e.target.value)}
                        size="large"
                        placeholder="大佬的网站名字"
                    />
                    <Input
                        value={url}
                        className="input"
                        onChange={(e) => setUrl(e.target.value)}
                        size="large"
                        placeholder="大佬的网站地址(以https,http开头)"
                    />
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input"
                        size="large"
                        placeholder="对于网站的描述(或者网站的主要内容)"
                    />
                    <Input
                        value={avaUrl}
                        className="input"
                        onChange={(e) => setavaUrl(e.target.value)}
                        size="large"
                        placeholder="网站的logo(以https,http开头)"
                    />
                    <Input
                        value={email}
                        size="large"
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        placeholder="QQ邮箱以'@'结尾,用于友链审核结果通知"
                    />
                </div>
                <Button type="primary" onClick={() => apply_link()}>
                    申请友链
                </Button>
                <div className="tip">
                    <div style={{ color: BlogTheme[theme].homeFontColor, fontSize: "20px" }}>本站格式</div>
                    <div>标题:Loneliness</div>
                    <div>地址:https://www.dingshiyi.top</div>
                    <div>描述:万水千山，你愿意陪我一起看吗</div>
                    <div>
                        Logo:https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat.jpg
                    </div>

                    <div>
                        提示:申请提交后若无其它原因将在24小时内审核，如超过时间还未通过，请私信我。
                    </div>
                </div>
            </div>
            <div className="input_and_submit">
                <hr className="parting-line" />
                <div className="dsy_tip">赶快来留言吖,博主会经常光顾本站<span style={{ color: "#ec5328" }}>(支持markdown语法)</span></div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "rgb(32, 157, 123)",
                        alignItems: "center",
                        fontSize: "14px",
                        margin: "4px 0",
                    }}
                >
                    <span>随便对站长说点什么吧❤</span>
                    <span className="flex-wrap">
                        <span>QQ邮箱提醒</span>{" "}
                        <Switch
                            onChange={(e) => handleSwitchChange(e)}
                            checkedChildren="开启"
                            unCheckedChildren="关闭"
                        ></Switch>
                    </span>
                </div>
            </div>
            <CommentInputWrap
                TextAreaChange={TextAreaChange}
                submitComment={submitComment}
                article_id={-1}
                commentList={commentList}
                comment={comment}
                showMoreComment={showMoreComment}
            />
        </InteractWrap>
    );
});