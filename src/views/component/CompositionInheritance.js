import React from "react";

function Children(props) {
  return (
    <div style={{color:props.color}}>
      <div>
        左：{props.left}
      </div>
      <div>
        右：{props.right}
      </div>
    </div>
  )
}


function Sidebar() {
  return <h1>侧边栏</h1>
}
function Content() {
  return <h2>内容区</h2>
}

//自定义属性，传值
//组合侧边栏/内容区
function CompositionInheritance() {
  return (
    <div>
      <Children color="red" left={<Sidebar />} right={<Content />}></Children>
    </div>
  )
}

export default CompositionInheritance;