// 导入类型校验的接口
// 用来约束state的
import { Counter2 } from "../../types"
// 导入约束action的接口
import { Action } from "../actions/counter2"
// 引入action动作行为的常量
import * as types from "../action-types"
// 我们需要给number赋予默认值
let initState:Counter2 = { number:0 }
// 把接口写在state:Store
export default function (state:Counter2=initState,action:Action) {
  // 拿到老的状态state和新的状态action
  // action是一个动作行为，而这个动作行为，在计数器中是具备 加 或 减 两个功能
  // 判断action的行为类型
  switch (action.type) {
    case types.ADD2:
        // 当action动作行为是ADD的时候，给number加1
        return { number:state.number + 1 }
      break;
    case types.SUBTRACT2:
        // 当action动作行为是SUBTRACT的时候，给number减1
        return { number:state.number - 1 }
      break;
    default:
        // 当没有匹配到则返回原本的state
        return state
      break;
  }
}