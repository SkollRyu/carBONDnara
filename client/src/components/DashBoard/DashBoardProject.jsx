import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function DashBoardProject ({projectName, image, target,id}) {
    return(
        <Col>
            <Card style={{ width: '12rem', height:'25rem'}}>
            <Card.Img style={{ width: '10rem', height:'10rem'}} className="text-center" variant="top" src={image} alt="Put image here" />
            <Card.Body>
                <Card.Title className="text-center">{projectName}</Card.Title>
                <Container>
                    <Row className="py-3 text-center">
                        <Col><b>£{target} Target</b></Col>
                        <Col><b>50% Left</b></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="py-3 text-center justify-content-md-center">    
                        <Col>
                            <Link to={`/bond/${id}`}>
                                <Button variant="outline-success" style={{width:'100%'}}>Check the progress</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default DashBoardProject;
