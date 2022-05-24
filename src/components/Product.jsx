import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import  styled  from 'styled-components';


const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
    
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    cursor: pointer;
    

    &:hover  ${Info} {
      opacity: 1;
      transition: all 0.5s ease;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 2;
`



const Icon = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color: #0b7474;
        color: white;
        transform: scale(1.1);
    }

`


const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
          <Icon>
              <ShoppingCartOutlined/>
          </Icon>
          <Icon>
              <SearchOutlined/>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
    </Container>
  )
}

export default Product