import  styled  from 'styled-components';
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Newsletter from '../components/Newsletter.jsx';


const Container = styled.div`
    
    
`

const SingleProduct = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default SingleProduct