import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

const Product = ({ product }) => {
    return (
        <Card style={{ width: '100%', marginBottom: '30px' }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant='top' src={product.image} />
            </Link>
            <Card.Body>
                <Card.Title>
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                </Card.Title>
                <Card.Text className='product-category'>
                    <i className='far fa-folder'></i> {product.category}
                </Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                <div className='product-meta'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </div>
                <Link className='btn btn-light' to={`/product/${product._id}`}>
                    View Product
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product
