import React from "react";

export default class Fragment extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
    }
    render(){
        return(
            <div>
                <table>
                <tr>
                <td>Welcome</td>
                <td>Deepak</td>
                </tr>
                <tr>
                    <td>Welcome</td>
                    <td>Abi</td>
                </tr>
                </table>
                
            </div>
        )
    }
}