import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

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
    cursor:pointer;

`;
const Link = styled.a`
    flex: 1;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    text-decoration: underline;
    font-size: 15px;
    cursor: pointer
`;

const Register = () => {
  const initialValues = {
      name: "",
      email: "",
      password: "",
  }

  const [values,setValues] = useState(initialValues)
  let navigate = useNavigate();
  const [message,setMessage] = useState("")

  const handleInputChange = (e) => {
      console.log(e.target.value)
      const {name,value} = e.target;
      setValues ({
          ...values,
          [name]: value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    //   const url = "http://localhost:3001/api/auth/register"
    //     axios.post(url,values).then(response => {
    //     console.log(response.data)
    //     setMessage(response.data.message)
    //     navigate("/login")
    //     }).catch(error => {
    //         console.log(error)})
  }

//   const dispatch = useDispatch();
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" name="name" onChange={handleInputChange}/>
                    <Input placeholder="Email" name="email" onChange={handleInputChange}/>
                    <Input placeholder="Password" name="password" onChange={handleInputChange}/>
                    <Button onClick={handleSubmit}>Create</Button>
                    <Link href="/login">Sign in to your account</Link>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register