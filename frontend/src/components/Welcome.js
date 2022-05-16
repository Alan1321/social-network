import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import Header from "../Utils/Header";

const Outer_Container = styled.div`
height:100vh;
`
const Signup_body = styled.div`
background-color:white;
height:90%;
display:flex;
`
const Signup_left = styled.div`
background-color:white;
width:50%;
display:flex;
text-align: center;
justify-content: center;
align-items: center;
`

const Signup_right = styled.div`
// background-color:blue;
width:50%;
display:flex;
text-align: center;
justify-content: center;
align-items: center;
`

const Signup_form = styled.form`
background-color:white;
//border: 5px solid grey;
width:70%;
height:70%;
display:flex;
text-align: center;
justify-content: center;
align-items: center;
`

const Login_body = styled.div`
// background-color:blue;
height:90%;
`

const Input = styled.input`
margin-bottom:1rem;
padding:1rem;
width:20rem;
`

const Login_form = styled.form`
background-color:white;
//border: 5px solid grey;
width:70%;
height:70%;
display:flex;
text-align: center;
justify-content: center;
align-items: center;
`

const Button = styled.button`
width:20rem;
height:3.5rem;
background-color:green;
margin-bottom:1rem;
`

const Welcome = () =>{

    const [login, setLogin] = useState(true);

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [singUpEmail, setSignUpEmail] = useState(null);
    const [singUpPassword, setSignUpPassword] = useState(null);
    const [singUpConfirmPassword, setsingUpConfirmPassword] = useState(null);

    const SignUpHandler = (event) =>{
        console.log(event)
        event.preventDefault();
    }

    const LoginHandler = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
        setLoginEmail('');
        setLoginPassword('');
    }

    return(
        <Outer_Container>
            <Header />
            <Signup_body>
                <Signup_left>
                    <div>
                        <h1 style={{lineHeight:'1rem'}}>socialHub</h1>
                        <h2 style={{lineHeight:'1rem'}}>Connect with friends and family</h2>
                    </div>
                </Signup_left>
                <Signup_right>
                    {!login && <Signup_form onSubmit={SignUpHandler}>
                        <div>
                            <Input type="text" id="fname" name="fname" placeholder="First name"/><br></br>
                            <Input type="text" id="lname" name="lname" placeholder="Last name"/><br></br>
                            <Input placeholder="Email"/><br></br>
                            <Input type="password" placeholder="password"/><br></br>
                            <Input type="password" placeholder="Confirm password"/><br></br>
                            <Button style={{backgroundColor:'green'}} type="submit">Submit</Button><br></br>
                            <Button onClick={()=>setLogin(true)}>Back to Login</Button>
                        </div>
                    </Signup_form>}
                    {login && <Login_form onSubmit={LoginHandler}>
                        <div>
                            <Input type="text" id="fname" name="fname" placeholder="Email" onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail}/><br></br>
                            <Input type="text" id="lname" name="lname" placeholder="Password" onChange={(e)=>{setLoginPassword(e.target.value)}} value={loginPassword}/><br></br>
                            <Button style={{backgroundColor:'green'}} type="submit">Submit</Button><br></br>
                            <Button onClick={()=>setLogin(false)}>Create new account</Button>
                        </div>
                    </Login_form>}
                </Signup_right>
            </Signup_body>
        </Outer_Container>
    )
}

export default Welcome