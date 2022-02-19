import * as actionTypes from "./constants";
import {
  getProductions
} from '@/network/battle.js'
import {
  changeMainLoadingAction
} from '@/pages/main/store/actionCreators'
//获取productions
export const getProductionListAction = () => {

  return dispatch => {
    dispatch(changeMainLoadingAction(true))
    getProductions().then(res => {
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