import * as actionTypes from "./constants";
import {
  getProductions
} from '@/network/battle.js'
import {
  changeMainLoadingAction
} from '../../main/store/actionCreators'
//获取productions
export const getProductionListAction = () => {
 
  return dispatch => {
    dispatch( changeMainLoadingAction(true))
    getProductions().then(res => {
      // console.log(res);
      dispatch( changeMainLoadingAction(false))
      dispatch(changeProductionListAction(res.data.doc))
    })
  }
}

const changeProductionListAction = (productionList) => {
  return {
    type: actionTypes.CHANGE_PRODUCTION_LIST,
    productionList
  }
}