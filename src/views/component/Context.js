import React,{createContext,useContext,useState } from "react";



const TestContext = createContext();

function Children(props) {
  const value = useContext(TestContext);
  console.log(value)
  return (
    <div>
      {/*<p>{value.p} 主动测试错误边界</p>*/}
      <p>{value.p.a}</p>
      <button onClick={value.c}>555</button>
    </div>
  )
}
function Btn(props) {
  return (
    <button onClick={props.cc}>点击</button>
  )
}

const parent = {a:1, b:2,}

function Context() {
  const change = ()=>{
    parent.a+=1;
    setCount({p:parent,c:change})
  }

  const [count, setCount] = useState({p:parent,c:change});


  return (
    <TestContext.Provider value={count} >
      <Children />
      <Btn cc={change}/>
    </TestContext.Provider>
  )
}

export default Context;