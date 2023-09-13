import React, { useEffect, useState, useRef } from 'react'

const Test = () => {
 const [num, setNum] = useState(0)
 const h1Ref = useRef(null)
 useEffect(() => {
  console.log('effect');
  console.log(h1Ref);
 }, [num])

 function updateNum() {
  setNum((prevnum) => prevnum + 1)
 }

 return (
  <div>
   <h1 ref={h1Ref}>hello ref</h1>
   <button onClick={updateNum}>update num</button>
   {num}
  </div >
 )
}

export default Test