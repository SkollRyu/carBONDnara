import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import {Link} from "react-router-dom"
import useFetch from '../../useFetch';
import "./investment.css"

function conditional(res){
    if(res){
            return(res.map(Bond=>(
            <Investment Bond={Bond} />)
            
        ))  
    }
}


function Investment({Bond}) {
    const { data: res, error, isPending } = useFetch('http://localhost:4000/bonds/');
    return(
        <Col>
            <Card className="card" style={{ width: '26rem', height:'700px',borderRadius: '30px' }}>
            
            <Card.Img style={{ width: '23rem', height:'300px',width:"auto",borderRadius: '30px' }} className="text-center" variant="top" src={Bond.image} alt="Put image here" />
            <div className="card-inner">
                <Card.Body >
                
                <Card.Title className="text-center">{Bond.projectName}</Card.Title>
                <Card.Text><h6>Project Holder: {Bond.name} </h6></Card.Text>
                <Card.Text><h6>Location: {Bond.location} </h6></Card.Text>
                <Card.Text><h6>Postcode: {Bond.postcode} </h6></Card.Text>
                {Bond.solutions.map((solution,key)=>(
                        <Card.Text><b>Solution {key+1}: {solution}</b></Card.Text>
                ))}
                <Container>
                    <Row className="py-3 text-center">
                        <Col md={6}><b>£{Bond.target} Target</b></Col>
                        <Col md={6}><b>{(Bond.current/Bond.target)*100}% Left</b></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="py-3 text-center">
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Link to={`/bond/${Bond.id}`}>
                                <Button variant="outline-success" style={{width:'100%'}}>Find Out More</Button>
                            </Link>
                            
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
                
            </Card.Body>
            </div>
            </Card>
        </Col>
    )
}

export default Investment;