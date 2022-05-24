
import { Send } from '@material-ui/icons';
import React from 'react'
import  styled  from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 2.5rem;
`

const Title = styled.h1`
    font-weight: bolder;
    
    letter-spacing: 0.3rem;
`

const Desc = styled.div`
    font-weight: 600;
    letter-spacing: 0.1rem;

`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    border: none;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    flex: 8;
    border: none;
    border: 0.5px solid lightgray;
    padding: 0rem 1rem;
    font-size: 14px;
    
`

const Button = styled.button`
    cursor: pointer;
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <InputContainer>
            <Input placeholder='Enter Your Email'/>
            <Button>
              <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter