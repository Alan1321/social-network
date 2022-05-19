import React from "react";

export function SignUpValidator(data){

    const result = []
    result[0] = true;
    var msg = ""

    if(data.firstName.length >= 10){
        result[0] = false;
        msg += 'First Name length can not be greater than 10\n'
    }
    if(data.lastName.length >= 10){
        result[0] = false;
        msg += 'Last Name length can not be greater than 10\n'    
    }
    if(data.password !== data.confirmPassword){
        result[0] = false;
        msg+= `Password don't match`
    }

    result[1] = {msg}
    return result
}
