import React from "react";
export default class Display extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
    }
    render(){
        return(
          <Function/>
        )
    }
}
function Function(){
    function tick(){
        return(<p>
            Welcome to split code view
        </p>)
    }
     setTimeout(tick,1000);
}