import React from 'react'
import  styled  from 'styled-components';
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Products from '../components/Products.jsx';

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`
const Select = styled.select`
    margin-right: 10px;
    padding: 0.5rem;
    
`;
const Option = styled.option`
   
    
`


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                 <FilterText>Filter Products:</FilterText>
                 <Select>
                     <Option disabled selected>Color</Option>
                     <Option>White</Option>
                     <Option>Black</Option>
                     <Option>Red</Option>
                     <Option>Blue</Option>
                     <Option>Yellow</Option>
                     <Option>Green</Option>
                 </Select>
                 <Select >
                     <Option disabled selected>Size</Option>
                     <Option>XS</Option>
                     <Option>S</Option>
                     <Option>M</Option>
                     <Option>L</Option>
                     <Option>XL</Option>
                     <Option>XXL</Option>
                 </Select>
            </Filter>
            <Filter>
                <FilterText>
                      Sort Products:
                </FilterText>
                <Select >
                     <Option selected>Newest</Option>
                     <Option>Price (asc)</Option>
                     <Option>Price (desc)</Option>
                    
                 </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList