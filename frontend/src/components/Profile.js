import React from "react";
import Header from "../Utils/Header";
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import {loginAction} from '../store/index'

const Outer_Container = styled.div`
height:100vh;
`
const Inner_Container = styled.div`
width:50vw;
min-width:600px;
`
const Background = styled.div`
//background-color:cyan;
background-image: url("https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?cs=srgb&dl=pexels-abdullah-ghatasheh-1631677.jpg&fm=jpg");
background-repeat: no-repeat;
background-size: cover;
height:350px;
min-width:600px;
min-height:350px;
`

const Picture = styled.div`
//background-color:red;
position:absolute;
height:200px;
background: #FF7A59;
width:200px;
border-radius: 50%;
top:320px;
left:5em;
border: 7px solid white;
background-image: url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
background-repeat: no-repeat;
background-size: cover;
min-width:150px;
min-height:150px;
`
const Freediv =styled.div`
height:70px;
width:100%;
//background-color:red;
display:block;
// min-width:500px; 
// min-height:100px;
// max-height:100px;
`

const Friend = styled.button`
float:right;
margin-top:50px;
padding:6px;
margin-right:2rem;
width:8rem;
height:3rem;
color:black;
background-color:#007AFC;
border: 5px solid #007AFC;
border-top-right-radius:35px;
border-top-left-radius:35px;
border-bottom-right-radius:35px;
border-bottom-left-radius:35px;
font-weight:1000;
//box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
//min-width:400px;
`

const Info = styled.div`
height:80px;
//background-color:blue;
font-weight:1000;
display:block;
`
const Bio = styled.div`
float:left;
margin-left: 5.5em;
`

const Stats = styled.div`
//background-color:green;
height:130px;
display:float;
width:100%;
`

const StatLeft = styled.div`
//background-color:blue;
width:33.33%;
border: 1px solid black;
border-right:0px;
border-left:0px;
`
const StatRight = styled.div`
//background-color:red;
width:33.33%;
border: 1px solid black;
border-right:0px;
border-left:0px;
`
const StatMid = styled.div`
width:33.33%;
border: 1px solid black;
border-right:0px;
border-left:0px;
`
const FinalContainer = styled.div`
//background-color:blue;
display:flex;
justify-content:center;
margin-top:60px;
`

// const Container = styled.div`

// `
const Button = styled.button`
font-weight:800;
background-color:#34a853;
margin:40px;
padding-left:40px;
padding-right:40px;
padding-top:20px;
padding-bottom:20px;
// border-top-right-radius:70px;
// border-top-left-radius:70px;
// border-bottom-right-radius:70px;
// border-bottom-left-radius:70px;
`


const Profile = () =>{
    const login = useSelector((state)=>state.login.login)
    console.log(login)
    return(
        <Outer_Container>
            <Header/>
            <Inner_Container>
                <Background></Background>
                <Picture></Picture>
                <Freediv>
                    <Friend>Add Friend</Friend>
                </Freediv>
                <Info>
                    <Bio>                        
                        <div>Alan Subedi</div>
                        <div>Software Engineer</div>
                        <div>alansubedi82@gmail.com</div>
                    </Bio>
                </Info>
                <Stats>
                    <StatLeft>                   
                        <h2 style={{color:'green', marginBottom:'-15px'}}>100</h2>
                        <h1>Friends</h1>
                    </StatLeft>
                    <StatMid>
                        <h2 style={{color:'green', marginBottom:'-15px'}}>500</h2>
                        <h1>Posts</h1>
                    </StatMid>
                    <StatRight>
                        <h2 style={{color:'green', marginBottom:'-15px'}}>500</h2>
                        <h1>Score</h1>
                    </StatRight>
                </Stats>
                <FinalContainer>
                    <Button><h1>Checkout Feed</h1></Button>
                    <Button><h1>Add new Post</h1></Button>
                </FinalContainer>
            </Inner_Container>
        </Outer_Container>
    )
}

export default Profile