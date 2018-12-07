import * as React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter";
import { Store, Counter } from "../types";
interface IProps{
  number:number,
  add:any,
  subtract:any,
  addAsync:any,
  goto:any
}
class CounterComponent extends React.Component<IProps>{
  render(){
    let { number, add, subtract, addAsync,goto } = this.props
    return(
      <div>
        <p>{number}</p><br/>
        <button onClick={add}>+</button><br/>
        <button onClick={subtract}>-</button><br/>
        <button onClick={addAsync}>异步加1</button>
        {/* 增加一个按钮,并且点击的时候执行goto方法实现跳转 */}
        <button onClick={()=>goto('/counter2')}>跳转到/counter2</button>
      </div>
    )
  }
}

let mapStateToProps = function (state: Store): Counter {
  return state.counter;
}
export default connect(
  mapStateToProps,
  actions
)(CounterComponent);