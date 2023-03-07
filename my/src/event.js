// import React from "react"
// export default function Button(){
//    return( <button onClick={()=>{
//         alert('Welcome')
// }}>Click Me </button>);
// }
// function Display({message,children}){
//         return( <button onClick={()=>{
//              alert(message);
//          }}>{children}</button>);
//      }
//      export default function Button(){
//          return(<div><Display message='Clicked Play Movie' >Playing Movie</Display>
//          <Display message ='Clicked Pause Movie'>Paused Movie</Display></div>);
//      }
// export default function Button(){
//         return( <div onClick={()=>alert('Welcome to div tag')}>
//             <View doSmash={()=>{alert('First view Tag')}}>First Tag</View>
//             <View doSmash={()=>{alert("Second View Tag")}}>Second Tag</View>
//          </div>);
//         }
//         function View({doSmash,children}){
//            return(<button onClick={e=>{
//             e.stopPropagation()
//             doSmash()}}>
//             {children}</button>);
//         }