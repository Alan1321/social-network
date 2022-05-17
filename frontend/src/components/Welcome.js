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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [singUpPassword, setSignUpPassword] = useState("");
    const [singUpConfirmPassword, setsingUpConfirmPassword] = useState("");

    const SignUpHandler = (event) =>{
        event.preventDefault();

        let data = {
            firstName:firstName,
            lastName:lastName,
            email:signUpEmail,
            password:singUpPassword,
        }
        
        fetchHandler(data)
    }

    const LoginHandler = (event) =>{
        event.preventDefault();
        setLoginEmail('');
        setLoginPassword('');
    }

    async function fetchHandler(body){

        const response = await fetch('http://localhost:3005/addprofile',{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let datas = await response.json()
        console.log(datas)
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
                            <Input type="text" id="fname" name="fname" placeholder="First name" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/><br></br>
                            <Input type="text" id="lname" name="lname" placeholder="Last name" onChange={(e)=>setLastName(e.target.value)} value={lastName}/><br></br>
                            <Input placeholder="Email" onChange={(e)=>setSignUpEmail(e.target.value)} value={signUpEmail}/><br></br>
                            <Input type="password" placeholder="password" onChange={(e)=>setSignUpPassword(e.target.value)} value={singUpPassword}/><br></br>
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