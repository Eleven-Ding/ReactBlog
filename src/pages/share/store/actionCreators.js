import * as actionTypes from "./constants";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
import { getShare } from "@/network/share";

//获取列表
export const getShareAction = (limit, page, type, access) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true))
    getShare(limit, page, type, access).then((res) => {

      dispatch(changeShareAction(res.data.info))
      dispatch(changeMainLoadingAction(false))
    });
  };
};
//改变列表
const changeShareAction = (shareList) => {
  return {
    type: actionTypes.CHANGE_SHARE_LIST,
    shareList,
  };
};
