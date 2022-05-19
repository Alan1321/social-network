import React from "react";

export async function fetchHandler(url, method ,body){

    let jsonBody = {
        method:'GET'
    }

    if(method == 'POST'){
        jsonBody={
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }
    const response = await fetch(url,jsonBody)
    let datas = await response.json()
    return datas;
}