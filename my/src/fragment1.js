import React from "react";

export default function Keys(props){
        return(
            <>
            {props.user.map((user)=>{
                  <React.Fragment key={props.id}>
                  <p>{props.term}</p>
                  <p>{props.term}</p>
                  </React.Fragment>
            })}
            </>
        )
} 