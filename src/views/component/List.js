import React from "react";
const cont= [1,2,3,4,5]

function List() {
  //必须加key
  return (
    <ol>
      {cont.map((item,idx)=>(
        <li key={idx}>数组元素{item}，下标{idx}</li>
      ))}
    </ol>
  )
}

export default List;