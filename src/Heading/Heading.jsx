import React, { Fragment } from "react";
import styled from "styled-components";
const Heading = (props)=>{
    return(
        <Fragment>
        <HeadWrap>
        <h1 className="edu-head">{props.headName}</h1>
        <div className={props.className}>.</div>
        </HeadWrap>
        </Fragment>
    )
};

const HeadWrap = styled.h1`

@media(width<=1220px){
.edu-head{
font-size:10vw;
}

  .edu-border{
  margin-top:1rem;
  margin-left:80vw;
  margin-bottom:10vw;
  max-width:30vw;
  }
}
    @media(width<=400px){
    .edu-head{
font-size:15vw;
}

  .edu-border{
  margin-top:1rem;
  margin-left:80vw;
  margin-bottom:10vw;
  max-width:30vw;
  }
    }


    
  @media(width<=320px){
  .edu-head{
font-size:10vw;
}

  .edu-border{
  margin-top:1rem;
  margin-left:80vw;
  margin-bottom:10vw;
  max-width:30vw;
  }
  
  }
`

export default Heading;