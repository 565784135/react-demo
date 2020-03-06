import React from "react";

function Ref() {
  const btn = React.createRef();
  function cc() {
    console.log(btn)
  }
  return (
    <p ref={btn} onClick={cc}>点击</p>
  )
}

export default Ref;