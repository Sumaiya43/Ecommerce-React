import { Badge } from "@material-ui/core"
import {Search  } from "@material-ui/icons"
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px; 
    background-color: black;
    color: white ;
`
const Wrapper = styled.div`
padding: 10px 20px ;
display: flex ;
justify-content: space-between ;
`
const Left = styled.div`
flex: 1;
display: flex ;
align-items: center;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
&:hover
 {
    color: palevioletred;
  }
`

const SearchContainer = styled.div`
 border: 0.5px solid palevioletred;
 border-radius: 20px ;
 display: flex ;
 align-items: center;
 margin-left: 25px ;
 padding: 3px 20px ;
 color: lightgray ;
 
`

const Input = styled.input`
border: none ;
outline-style: none;
background-color: black;
color: white;

`
/***************************************CENTER*******************************************************/

const Center = styled.div`
flex: 1;
text-align: center ;

`

const Logo = styled.h1`
font-weight: bolder;
font-family: 'Amatic SC', cursive;
letter-spacing: 0.5rem;

&:hover
 {
    color: palevioletred;
  }
`

/*****************************************RIGHT*************************************************** */
const Right = styled.div`
flex: 1;
display: flex ;
justify-content: flex-end ;
align-items: center ;

`

const MenuItem = styled.div`
font-size: 14px ;
cursor: pointer;
padding: 0 10px;
&:hover
 {
    color: palevioletred;
  }
 
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input/>
                   <Search style={{color:"palevioletred"}}/>
                  
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    MODESTSTYLE
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="secondary">
                 <ShoppingCartOutlinedIcon/>
                </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar