import React, { useState} from 'react'
import api from '../utils/axiosWithAuth'
import styled from 'styled-components'

const AddForm = styled.form`
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
`

const AddFriend = ({setFriends}) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
            .post('friends', friend)
            .then(res => {
                console.log('jp: AddFriend.js friend was added', res)
                setFriends(res.data)
            })
            .catch(err => {
                return err.response
            })
    }

    return (
        <AddForm>
            <Input type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
            <Input type='text' name='age' placeholder='Age' value={friend.age} onChange={handleChange} />
            <Input type='text' name='email' placeholder='Email' value={friend.email} onChange={handleChange} />

            <Button type='submit' onClick={handleSubmit}>Add A Friend</Button>
        </AddForm>
    )
}

export default AddFriend