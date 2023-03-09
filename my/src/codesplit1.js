export default function Add({user}){
    const num1=user.num1;
    const num2=user.num2;
    return ( import("./codesplit2").then(codesplit2=>{
        alert(codesplit2.Fdd(num1,num2))
    }));
    
  } 