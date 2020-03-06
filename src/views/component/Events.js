import React, { useState } from "react";

function children() {
  function handle(e) {
    //必须显示阻止默认事件
    e.preventDefault();
    alert('123')
  }
  return <a href="https://baidu.com" onClick={handle}>点击-阻止默认事件</a>
}

function Events() {
  const [count, setCount] = useState(false);

  function change () {
    setCount(!count)
  }

  return (
    <div>
      <button onClick={change}>点击显示/隐藏</button>
      {count && children()}
    </div>

  )
}

export default Events;