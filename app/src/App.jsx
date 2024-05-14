import { useState } from "react"


function App() {
const [count,setCount] = useState(0);

  return (
    <>
<h1>Counter App</h1>
<p>Count: {count}</p>
<button onClick={()=>setCount((prevcount)=>prevcount+1) }>Increment</button>
<button onClick={()=>setCount((prevcount)=>prevcount-1) } >Decrement</button>

    </>
  )
}

export default App
