import React, { useState, useEffect } from 'react'
import api from '../utils/axiosWithAuth'
import Friend from './Friend'
import AddFriend from './AddFriend'
import styled from 'styled-components'

const FriendsDiv = styled.div`
    display: flex;
    flex-flow: wrap row;
    margin: 2rem auto;
    width: 90%;
`


const Friends = () => {
    const [error, setError] = useState('')
    const[friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                setError(err.response)
            })
    }, [])

    return (
        <>
            <AddFriend setFriends={setFriends} />
            <FriendsDiv>
                {error && <div>{error}</div>}

                {friends &&
                    friends.map((friend, indx) => {
                        return<Friend
                                key={indx}
                                data={friend} 
                                />
                    })
                }
        </FriendsDiv>
    </>
    )
}

export default Friends 