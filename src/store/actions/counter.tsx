import * as types from "../action-types";
// 引入push方法
import { push } from "connected-react-router";
export interface Add{
  type:typeof types.ADD
}
export interface Subtract{
  type:typeof types.SUBTRACT
}

export type Action = Add | Subtract

export default {
  add():Add{
    return { type: types.ADD}
  },
  subtract():Subtract{
    return { type: types.SUBTRACT}
  },
  addAsync():any{
    return function (dispatch:any,getState:any) {
      setTimeout(function(){
        dispatch({type:types.ADD})
      }, 1000);
    }
  },
  goto(path:string){
    // 派发一个动作
    // 这个push是connected-react-router里的一个方法
    // 返回一个跳转路径的action
    return push(path)
  }
}