import React from "react";
import Header from "../Utils/Header";
import styled from 'styled-components'


const Outer_Container = styled.div`
height:100vh;
`

const Profile = () =>{
    return(
        <Outer_Container>
            <Header/>
            <div>This is profile Body</div>
        </Outer_Container>
    )
}

export default Profile