import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Badge,
    Button,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }

        fetchProduct()
    }, [match])

    return (
        <div>
            <Link className='btn btn-light' to='/'>
                Go Back
            </Link>
            <Row className='mt-4 align-items-center'>
                <Col md={6}>
                    <img src={product.image} alt={product.name} />
                </Col>
                <Col md={6}>
                    <div className='product-content'>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3>{product.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Price: ${product.price}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>{product.description}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Badge
                                    variant={
                                        product.countInStock > 0
                                            ? 'success'
                                            : 'danger'
                                    }
                                >
                                    {product.countInStock > 0
                                        ? 'In Stock'
                                        : 'Out of Stock'}
                                </Badge>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button
                                    disabled={product.countInStock === 0}
                                    variant='light'
                                >
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
