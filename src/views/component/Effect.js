import React, { useState, useEffect } from "react";

function Effect() {
  const [ num, setNum ] = useState(0);
  const [ aa, setAa ] = useState(0);
  // num 变化则执行
  useEffect(()=>{
    console.log(11111)
  },[num,aa])

  const add = ()=>{
    setNum(num+1)
    setAa(aa + 1)
  }

  return (
    <div>
      <p>{num}--{aa}</p>
      <button onClick={add}>点击+1</button>
    </div>
  )
}

export default Effect;