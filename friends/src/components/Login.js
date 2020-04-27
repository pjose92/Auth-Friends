import React from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 5rem auto;
    padding: 50px;
    border: 1px solid #ccc;

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    position: relative;
`

const Input = styled.input`
    box-sizing: border-box;
	font-size: 14px;
	padding: 15px;
	border-radius: 3px;
	border: none;
	box-shadow: inset 0 0 0 1px #dee1e3;
	width: 100%;
	outline: none;
    margin: 1rem auto;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px;
    font-size: 14px;
    border-radius: 5px;
    background-color: #0077CC;
    color: white;
    appearance: none;
    :hover{
        background: #0789e6;
    }
`


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state.credentials,
            isLoading: true
        })
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log('jp: Login.js line 73 success', res);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends')
            this.setState({
                credentials: {
                    username: '',
                    password: ''
                },
                isLoading: false
            })
        })
        .catch(err => console.log('jp: error line 84 Login.js', err))
    };

    render() {
        return this.state.isLoading ? (
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={8000}
            />) : (
                <Form onSubmit={this.login}>
                    <Input
                    required
                    placeholder='Username'
                    id='username'
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                
                    <Input
                    required
                    placeholder='Password'
                    id='password'
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                
                    <Button type='submit'>Log In</Button>
                </Form>
            )

    }
}    


export default Login;


// import React, { useState } from 'react'
// import api from '../utils/axiosWithAuth'
// import styled from 'styled-components'

// import Loader from 'react-loader-spinner'

// const Login = props => {
//     const [error, setError] = useState()
//     const[user, setUser] = useState({
//         username: '',
//         password: ''
//     })

//     const handleChange = e => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()

//         api()
//             .post('/login', user)
//             .then(res => {
                
//                 localStorage.setItem('token', res.data.payload)
//                 props.history.push('/friends')
//             })
//             .catch(err => {
//                 setError(err.response.data.message)
//             })
//     }

//     return (
//         <LongDiv onSubmit={handleSubmit}>
//             {error && <div className='error'>{error}</div>}

//             <Input type='text' name='username' placeholder='username' value={user.username} onChange={handleChange} />
//             <Input type='password' name='password' placeholder='password' value={user.password} onChange={handleChange} />

//             <Button type='submit'>Login</Button> 
//         </LongDiv>
//     )
// }

// export default Login