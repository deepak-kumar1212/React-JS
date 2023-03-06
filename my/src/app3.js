import Imageurl from "./impexp";
function Avatar({person}){
   return (
    <img 
    src={Imageurl(person)}/> );    
}
export default function View(){
    return(<Avatar
        person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2',
        size:55}}/>);
}