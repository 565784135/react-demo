import React from "react";

class StateLifecycle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: 1};
  }
  //组件挂载后
  componentDidMount() {
    // this.timerId = setInterval(()=>this.tick(),5000);
  }
  //组件销毁之前
  componentWillUnmount() {
    // clearInterval(this.timerId);
  }

  tick(){
    //直接修改
    //this.setState({date: 1});

    //State 的更新可能是异步的
    this.setState(function(state,props){
      // this.state == state
      console.log(state,props)
      return {
        date:state.date + 1
      }

    })

  }

  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}</h2>
        <button onClick={()=>this.tick()}>点击+1</button>
      </div>
    )
  }

}

export default StateLifecycle;