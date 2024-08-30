import React, { useState } from 'react'

function HigherOrderFn(CallbackComponent) {
    // hoc logic

    const ModifiedComponent=(props)=>{
        
        const [count,setCount]=useState()
        // Return component logic
        let additionalProps={}
        if (props.name=="Vinay") {
            additionalProps.address="Ranchi"
        } else if(props.name=="Rohit"){
            additionalProps.address="Delhi"
        }

        // Child2
        if (props.age) {
            if (props.age>18) {
                additionalProps.isEligible=true
            } else{
                additionalProps.isEligible=false
            }
        }


        return(
            <>
                <CallbackComponent {...additionalProps} {...props} count={count} />
            </>
        )
    }
  return ModifiedComponent
}

export default HigherOrderFn