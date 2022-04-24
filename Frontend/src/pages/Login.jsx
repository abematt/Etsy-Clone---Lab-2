import styled from "styled-components"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login } from '../redux/apicalls'
 
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                    rgba(255,255,255,0.7),
                    rgba(255,255,255,0.3)
                    ),
                    url(https://www.teahub.io/photos/full/29-294939_light-grey-material-design.jpg) 
                    center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 45px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    border: 1px solid black;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    padding: 15px;
`;
const Button = styled.button`
    flex: 1;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    padding: 15px;
    border: none;
    background-color: orange;

`;
const Link = styled.a`
    flex: 1;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    text-decoration: underline;
    font-size: 15px;
    cursor: pointer
`;

const Error = styled.p`
    flex: 1;
    min-width: 50%;
    margin: 10px 10px 0px 0px;
    font-size: 15px;
    color: red;
`


const Login = () => {
  const [email,setEmail] =useState("")
  const [password,setPassword] = useState("")

//   const dispatch = useDispatch();
//   const {isFetching,error} = useSelector((state)=>state.user)
  const handleClick = (e) =>{
      e.preventDefault();
      console.log({email,password})
    //   login(dispatch,{email,password})
  }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder="Email" 
                        onChange={(e)=> setEmail(e.target.value)}/>
                    <Input 
                        placeholder="Password"
                        type="password"
                        onChange={(e)=> setPassword(e.target.value)}/>
                    <Button onClick={handleClick}>Login</Button>
                    <Link href="/register">Create a new account</Link>
                    {/* {error && <Error>Something went wrong</Error>} */}
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Login