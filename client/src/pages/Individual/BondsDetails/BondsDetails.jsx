import Header from "../../../components/Header/Header";
import TopBar from "../../../components/TopBar/TopBar";
import SimilarBonds from "../../../components/SimilarBonds/SimilarBonds";
import useFetch from "../../../useFetch";
import {useNavigate, useParams} from "react-router-dom"
import {Modal, Button,Container,Row,Col,ProgressBar} from "react-bootstrap";
import { useState } from "react";


function Bondsdetails(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const { data: bond, error, isPending } = useFetch('http://localhost:4000/bonds/' + id);
    const Navigate = useNavigate();
    if (bond){
        return(
        <>
        <TopBar />
        <Header text={"Bonds - "+bond.projectName}/>
        <Container style={{minHeight:'80vh'}} className="mt-5 pt-5">
            <Row>
                <Col xs={6}>
                    <img src={bond.image} alt="Image" style={{width:"100%"}}/>
                </Col>
                <Col xs={6}>
                    <div>
                    <h3>Bonds ID : {bond.id}</h3>
                    <h3>Bonds Issued by : {bond.name}</h3>
                    <h3>Bonds location : {bond.location}</h3>
                    <h3>Bonds Postcode : {bond.postcode}</h3>
                    {bond.solutions.map((solution,key)=>(
                                <h3>Solution {key+1}: {solution}</h3>
                    ))}
                    <h3>Progress :{bond.current} / {bond.target}</h3>
                    <ProgressBar now={bond.current/bond.target*100} />
                    <Button variant="primary" className="py-2 my-3" onClick={handleShow}>Purchase</Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to purchase <b>{bond.projectName}</b>'s bond</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Yes
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            No
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            <Row style={{fontSize:"20px"}}>
                Description : {bond.description}
            </Row>
            
        </Container>
        </>
    )
    }
    
}

export default Bondsdetails;