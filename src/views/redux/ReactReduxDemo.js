import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>点击+1</button>
      </div>
    )
  }
}



// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state =  0 , action) {
  switch (action.type) {
    case 'increase':
      return state + 1
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
// 获取
function mapStateToProps(state) {
  return {
    value: state
  }
}

// Map Redux actions to component props
// 输入
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component

const App = connect(mapStateToProps, mapDispatchToProps)(Counter)


function ReactReduxDemo() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default ReactReduxDemo;