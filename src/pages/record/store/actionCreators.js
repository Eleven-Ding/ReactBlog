import * as actionTypes from "./constants";

import {
  getRecordInfo
} from "@/network/record";


export const getRecordInfoAction = function () {
  return dispatch => {
    getRecordInfo().then(res => {
      dispatch({
        type: actionTypes.GET_RECORD_LIST,
        payload: res.data?.list
      })
    })


  }
}