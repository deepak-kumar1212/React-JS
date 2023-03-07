export default function Condition(){
    return(
     <Vue
     array={[1,2,3,4]}/>
    );
 }
 function Vue({array}){
     return(
         <div>
             <h1>
                 Hello
             </h1>
             {(array.length>=0 && <h2>Welcome</h2>)}
         </div>,
         (array.length===0)?<h2>Welcome</h2>:<h2>Get Out</h2>
     );
 }
 