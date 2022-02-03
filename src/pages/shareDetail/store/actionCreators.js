import * as actionTypes from "./constants";
import { getShareDetail } from "@/network/share";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";

export const getShareDetailAction = (id) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true));

    getShareDetail(id).then((res) => {

      dispatch(changeShareDetailAction(res.data.info))
      dispatch(changeMainLoadingAction(false));
    });
  };
};

export const changeShareDetailAction = (shareDetail) => {
  return {
    type: actionTypes.CHANGE_SHARE_DETAIL,
    shareDetail,
  };
};
