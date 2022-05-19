import React from "react";
import Header from "../Utils/Header";
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import {loginAction} from '../store/index'

const Outer_Container = styled.div`
height:100vh;
`

const Profile = () =>{
    const login = useSelector((state)=>state.login.login)
    console.log(login)
    return(
        <Outer_Container>
            <Header/>
            <div>This is profile Body</div>
        </Outer_Container>
    )
}

export default Profile