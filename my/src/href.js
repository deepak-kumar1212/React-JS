import { useRef } from "react";
export default function Href(){
    const user=useRef(null)
    function handleChange(){
       user.current.focus();
    }
  return(
    <>
    <input ref={user}/>
        <button onClick={handleChange}>
             click to view cursor
        </button>
    </>
  )
}