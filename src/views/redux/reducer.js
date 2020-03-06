import { combineReducers } from "redux";

import { actions, steta } from './reduxProps';

// 拆分
const reducerParts = {
  num(_num = steta.num,_action){
    const { type, num } = _action;
    switch (type) {
      case actions.ADD:
        return _num + num;
      case actions.SUB:
        return _num - num;
      default:
        // console.log('num',_num,_action);
        return _num;
    }
  },
  str(_str = steta.str,_action){
    const { type, str } = _action;
    switch (type) {
      case actions.CHENG:
        return _str + str;
      default:
        // console.log('str',_str,_action);
        return _str;
    }
  }
}

const reducer =  combineReducers(reducerParts);

export default reducer;