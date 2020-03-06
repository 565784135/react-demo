import React, { useState } from "react";
import http from "../../libs/http";

function Fetch() {
  const [list, setList] = useState([]);
  const [off, setOff] = useState(false);
  // es6
  async function getData() {
    if(off) return ;
    setOff(true)
    let data = await http.get('http://jsonplaceholder.typicode.com/posts');
    // console.log(data)
    setList(data);
    setOff(false)
  }

  // 使用es5
  function getData2() {
    if(off) return ;
    setOff(true)
    http.get('http://jsonplaceholder.typicode.com/posts')
      .then(data=>{
        // console.log(data)
        setList(data);
        setOff(false)
      })
  }

  return (
    <div>
      <button onClick={getData2}>
        { off ? 'load...' : '点击请求'}
      </button>
      <ul style={{overflowY:'auto',height:500}}>
        {list.map(item=>(<li key={item.id}>{item.id}、{item.title}</li>))}
      </ul>
    </div>
  )

}

export default Fetch;