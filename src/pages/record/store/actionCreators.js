import * as actionTypes from "./constants";
import {
  getRecordInfo,
} from "@/network/record";

import { changeMainLoadingAction } from "../../main/store/actionCreators";
export const getRecordInfoAction = function (page, limit, imgList) {
  return dispatch => {
    dispatch(changeMainLoadingAction(true))
    getRecordInfo(page, limit).then(res => {
      dispatch(changeMainLoadingAction(false))
      dispatch({
        type: actionTypes.GET_RECORD_LIST,
        payload: [...imgList, ...res.data?.list]
      })
      dispatch({
        type: actionTypes.SET_IS_FETCHING_DATA,
        payload: false
      })
    })
  }
}
