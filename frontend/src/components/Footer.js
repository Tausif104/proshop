import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
