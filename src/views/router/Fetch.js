import React, { useState } from "react";
import http from "../../libs/http";

function Fetch() {
  const [data, setData] = useState('');
  const [off, setOff] = useState(false);
  // es6
  // async function getData() {
  //   if(off) return ;
  //   setOff(true)
  //   let data = await http.get('http://t.weather.sojson.com/api/weather/city/101190101');
  //   // console.log(data)
  //   setData(JSON.stringify(data));
  //   setOff(false);
  // }

  // 使用es5
  function getData2() {
    if(off) return ;
    setOff(true)
    http.get('http://api.jirengu.com/getWeather.php')
      .then(data=>{
        // console.log(data)
        setData(JSON.stringify(data));
        setOff(false);
      })
  }

  return (
    <div>
      <button onClick={getData2}>
        { off ? 'load...' : '点击请求'}
      </button>
      <p style={{width:600,wordWrap:'break-word'}}>{data}</p>
    </div>
  )

}

export default Fetch;