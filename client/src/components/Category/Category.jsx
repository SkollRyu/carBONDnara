import {Card, Button, Col} from 'react-bootstrap';

function Category(image, title){
    return(
        <Col>
            <Card style={{ width: '18rem', height:"200px" }}>
            <Card.Img variant="top" src = {image} alt = {title}  />
            </Card>
        </Col>
    )
}

export default Category;