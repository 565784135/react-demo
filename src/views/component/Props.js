import React from "react";

function Welcome(props) {
  return (
    <h1>hello,{props.name}</h1>
  )
}
function Props() {
  return (
    <div>
      <Welcome name='Components'></Welcome>
      <Welcome name='Props'></Welcome>
    </div>
    )

}

export default Props;
