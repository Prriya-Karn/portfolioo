import React, { Fragment } from "react";
const Heading = (props)=>{
    return(
        <Fragment>
        <h1 className="edu-head">{props.headName}</h1>
        <div className={props.className}>.</div>
        </Fragment>
    )
}

export default Heading;