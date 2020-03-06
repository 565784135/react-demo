import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
//中间件
//({dispatch,getState})=>next=>action
const _log = ({dispatch,getState})=>next=>action=>{
  console.log('action', action)
  // console.log('dispatch', dispatch)
  // console.log('next', next)

  let result = next(action);

  console.log(result,'next state1', store.getState())

  return result
}

const store = createStore(reducer,applyMiddleware(_log));
class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
    console.log('before');
      this.props.onIncrement()
    console.log('after');
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>Clicked: {value} times</p>
        <p><button onClick={onIncrement}>点击+1</button></p>
        <p><button onClick={onDecrement}>点击-1</button></p>
        <p><button onClick={this.incrementIfOdd}>单数+1</button></p>
        <p><button onClick={this.incrementAsync}>1秒后+1</button></p>
      </div>
    )
  }
}

class demo extends Component{
  componentDidMount(){
    console.log(123)
    store.subscribe(()=>this.forceUpdate())
  }
  render() {
    return (
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>

    )
  }

}



export default demo;