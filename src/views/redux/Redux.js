import React,{ useReducer } from "react";

import {actions,steta,reducer} from './reduxProps';

function Add(props) {
  return (
    <button onClick={props.onAdd}>点击加1</button>
  )
}

function Sub(props) {
  return (
    <button onClick={props.onSub}>点击减2</button>
  )
}

function Redux () {
  const [_state, dispatch] = useReducer(reducer, steta);
  return (
    <div>
      <p>{_state.num}</p>
      <p><Add onAdd={()=>dispatch(actions.add(1))}/></p>
      <p><Sub onSub={()=>dispatch(actions.sub(2))}/></p>
      <p>==================</p>
      <p>{_state.str}</p>
      <button onClick={()=>dispatch(actions.cheng('redux'))}>hello redux</button>
      <button onClick={()=>dispatch({type:'no'})}>no,no,no</button>
    </div>
  )
}

export default Redux;