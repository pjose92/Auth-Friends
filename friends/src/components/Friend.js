import React from 'react'
import styled from 'styled-components'

const FriendDiv = styled.div`
    border: 1px solid black;
    border-radius: .5rem;
    width: 29%;
    margin: 1rem 1rem;
`
const Data = styled.div`
    margin: 1rem auto;
`

const Friend = ({data}) => {
    const { name, age, email } = data
    return(
        <FriendDiv>
            <Data>{name}</Data>
            <Data>{age}</Data>
            <Data>{email}</Data>
        </FriendDiv>
    )
}

export default Friend