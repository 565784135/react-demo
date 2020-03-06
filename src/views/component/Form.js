import React, { useState } from "react";

function Form() {
  const [name, setCount] = useState('');

  function handleSubmit (e) {
    alert('提交的名字: ' + name);
    e.preventDefault();
  }

  //textarea/select 类似
  function change (e) {
    console.log(e.target.value)
    setCount(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
        <input type="text" name="name" value={name} onChange={change} />
      </label>
      <input type="submit" value="提交" />
    </form>
  )

}

export default Form;