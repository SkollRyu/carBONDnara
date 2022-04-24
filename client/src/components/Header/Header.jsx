import { Container,Row,Col } from 'react-bootstrap';
import "./header.css"
function Header ({text}){
    return (
        <Container fluid >
                <Row className="bg">
                <Col md={12} className="section"></Col>
                    <Col md={2}></Col>
                        <Col md={8} className="text-center"><div className=" cta">{text}</div></Col>
                    <Col md={2}></Col>
                </Row>
        </Container>
    )
}

export default Header;