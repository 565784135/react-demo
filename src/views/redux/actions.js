import state from "./state";

export const ADD = 'ADD';
export const SUB = 'SUB';
export const CHENG = 'CHENG';


export const add = (num=state.num) => ({type:ADD, num});
export const sub = (num=state.num) => ({type:SUB, num});
export const cheng = (str=state.str) => ({type:CHENG, str});