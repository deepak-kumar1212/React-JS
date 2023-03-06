function Deepak({person}){
    return(<h1>Welcome {person.name}</h1>)
}
export default function View(){
   return( <Deepak
    person={{
        name:'Kumar',
        age:22
    }}/>);
}