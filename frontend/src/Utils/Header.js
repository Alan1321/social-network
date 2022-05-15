import React from "react";
import styled from 'styled-components'

const Outer_Container = styled.div`
background-color:grey;
height:5rem;
width:100%;
display: flex;
//text-align: center;
//justify-content: center;
align-items: center;
`
const Inner_Container = styled.div`
width:100%;
//background-color:blue;
height:3rem;
display:flex;
justify-content: space-between;
`

const Left = styled.div`
color:white;
font-weight:bold;
font-size:2rem;
display:flex;
align-items: center;
margin-left:4rem;
`

const Right = styled.div`
display:flex;
width:15rem;
justify-content: space-between;
align-items: center;
margin-right:1rem;
`
const Button = styled.button`
padding:0.5rem;

`

const Header = () =>{
    return(
        <Outer_Container>
            <Inner_Container>
                <Left>socialHub</Left>
                <Right>
                    <Button>Home</Button>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </Right>
            </Inner_Container>
        </Outer_Container>
    )
}

export default Header