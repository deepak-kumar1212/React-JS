export default function Mycaption(props){
   let result;
         if((props.foo)%2===0){
            result='Even';
     }
     else{
        result='Odd'
     }
     
      return(<div>{props.foo} is an {result}</div>)  
    }