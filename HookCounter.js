import React,{useState,useEffect} from 'react'
function HookCounter(){
const [count,setCount]=useState(0)
useEffect(()=>{
    document.title=`Clicked ${count} times`
})
    return(
    <div>
        <h1>Increment Counter Using Hooks in Function component</h1>
<button onClick={()=>setCount(count+1)}>Counter-{count}</button>
    </div>)
}
export default HookCounter;