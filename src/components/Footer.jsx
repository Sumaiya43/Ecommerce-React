
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import  styled  from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
`

const Desc = styled.p`
    margin: 20px 0px`

const SocialContainer = styled.div`
     display: flex;
     
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;

`

const Title = styled.h3`
    margin-bottom: 20px;

`


const List = styled.ul`
   margin: 0;
   padding: 0;
   display: flex;
   flex-wrap: wrap;

`



const ListItem = styled.li`
    list-style: none;
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MODESTSTYLE</Logo>
            <Desc>
            Looking for the right eCommerce Platform? 
            Find out what features and functionality are essential for eCommerce efficiency.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999' >
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
             <ListItem>Home</ListItem>
             <ListItem>Cart</ListItem>
             <ListItem>Man Fashion</ListItem>
             <ListItem>Woman Fashion</ListItem>
             <ListItem>Accessories</ListItem>
             <ListItem>My Account</ListItem>
             <ListItem>Order Tracking</ListItem>
             <ListItem>WishList</ListItem>
             <ListItem>Terms</ListItem>
             
           </List>
        </Center>
        <Right>
           <Title>Contact</Title>
           <ContactItem><Room style={{marginRight:"10px"}}/>  Sylhet, Amberkhana, 83/7 Subhan Manjil.</ContactItem>
           <ContactItem><Phone style={{marginRight:"10px"}}/>  +8801623685653</ContactItem>
           <ContactItem><MailOutline style={{marginRight:"10px"}}/> sumaiyabegum43@gmail.com</ContactItem>
           <Payment src="https://images.squarespace-cdn.com/content/v1/51e1bf57e4b0e2abc3e95f77/1513916167263-CLDOR1L761FOIR1TW0TO/credit+cards.png"/>
        </Right>
    </Container>
  )
}

export default Footer