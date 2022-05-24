import React from 'react'
import  styled  from 'styled-components';


const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
font-style: italic;
display: flex;
justify-content: center;

align-items: center;
`

const Announcement = () => {
  return (
    <Container>
        EXPLORE OUR WEBSITE!!!!!!
    </Container>
  )
}

export default Announcement