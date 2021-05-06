import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Link className='navbar-brand' to='/'>
                        ProShop
                    </Link>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Link className='nav-link' to='/cart'>
                                <i className='fas fa-shopping-cart'></i> Cart
                            </Link>
                            <Link className='nav-link' to='/login'>
                                <i className='fas fa-user'></i> Sign In
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
