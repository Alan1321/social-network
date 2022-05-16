import React from "react";
import styled from 'styled-components'

const Outer_Container = styled.div`
background-color:grey;
height:10%;
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
// background-color:green;
float:right;
`
const Button = styled.button`
background-color:white;
padding:0.5rem;
font-weight:bold;
float:right;
`

const Header = () =>{
    return(
        <Outer_Container>
            <Inner_Container>
                <Left>socialHub</Left>
                <Right>
                    <Button>Home</Button>
                </Right>
            </Inner_Container>
        </Outer_Container>
    )
}

export default Header