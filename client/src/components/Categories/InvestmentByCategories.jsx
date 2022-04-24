import {Card,CardGroup, Container,Row,Col,Button} from 'react-bootstrap';
import Investment from '../Investment/Investment';
import Category from '../Category/Category';
function Categories(){
    return(
        <Container>
            <Row className="text-center"><h1>Browse Investment by Categories</h1></Row>
            <Row className="text-center"><h2>By categories browsing </h2></Row>
            <Row xs={1} md={4} className="g-4">
                <Category 
                    title = "HouseHold Item"
                    image = "https://www.practiceportuguese.com/wp-content/uploads/2017/08/Household-Items.jpg"

                />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </Row>
        </Container>
    )
}
export default Categories;