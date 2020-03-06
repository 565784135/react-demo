import React from "react";

function Fragments() {
  return (
    <div>

      <React.Fragment>占位符，仅渲染子元素</React.Fragment>
      <div>正常渲染div标签</div>
      <>简写</>
    </div>
  )

}

export default Fragments;