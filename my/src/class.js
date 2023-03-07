import React from "react";
export default class Con extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogged:true};
    }
     Avatar(){
        this.setState({isLogger:false})
    }
    Deleted(){
        this.setState({isLogger:true})
    }
    render(){
        const isLogged=this.state.isLogged;
        const Avatar=this.state.Avatar;
        const Deleted=this.state.Deleted
        return(<div>
            <h1>
                Hello
            </h1>
            {
                (isLogged?<Avatar/>:<Deleted/>)
            }
            if(isLogged){
                alert('welcome to my page')
            }
        </div>);
    }
}