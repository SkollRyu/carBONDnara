import { Container, Row, Col, Alert, Form, Button, Image} from "react-bootstrap";
import "./DashBoardBody.css"
import DashBoardProject from './DashBoardProject';
import useFetch from '../../useFetch';
import React, {useState} from 'react';

function conditional(res){
    if(res){
            return(res.map(Bond=>(
            <DashBoardProject projectName={Bond.projectName} image={Bond.image} target={Bond.target} id={Bond.id}/>)
            
        ))  
    }
}

function DashboardBody({username}) {

    username = "Dummy"; // example username
    
    const { data: res, error, isPending } = useFetch('http://localhost:4000/bonds/');
    const [disable, setDisable] = useState(true)

    return (
        <>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you {username}, welcome to your dash board</Alert.Heading>
                <p>
                    This is the place, where you can see all your data and manage it.
                </p>
                <hr />
                <p className="mb-0">
                    Please contact us, if you have any questions/issues.
                </p>
            </Alert>

            <Container>
                <Alert variant="warning">
                    <Row>
                        <Col sm = {2}>
                                <Alert.Heading>
                                    <Image style={{ width: '9rem' }} src = "https://alrigh.com/wp-content/uploads/2020/06/10-Midoriya-Izuku-profile-picture-1024x1018.jpg" >
                                    </Image>
                                </Alert.Heading>
                        </Col>
                        <Col sm = {10}>
                            <h2>Username</h2>
                            <h4>Bio: Life sucks</h4>
                            <Button variant="warning" type="submit" className="my-3" onClick={() => setDisable(disable ? false : true)}>
                                    Edit Profile
                            </Button>
                        </Col>
                    </Row>
                </Alert>
                <Row>
                    <Col sm ={8}>
                    <h2>Your Projects</h2>
                        <Container className="py-4">    
                            <Row xs={1} md={4} className="g-4">
                                {conditional(res)}
                                {/* <DashBoardProject 
                                    projectName = "Oven" 
                                    name = "Peter Pan"
                                    image = "https://uk.bertazzoni.com/media/immagini/13061_z_F6011PRO-TX.jpg"
                                    location = "Brighton"
                                    price = "1000"
                                    />
                                <DashBoardProject 
                                    projectName = "Television" 
                                    name = "Peter Pan"
                                    image = "https://www.collinsdictionary.com/images/full/television_160593200.jpg"
                                    location = "Brighton"
                                    price = "2000"
                                />
                                <DashBoardProject
                                    projectName = "Washer" 
                                    name = "Peter Pan"
                                    image = "https://cdn.hughes.co.uk/live/media/image/14/49/c4/hoo-h3w49te.jpg"
                                    location = "Brighton"
                                    price = "3000"
                                />
                                <DashBoardProject 
                                    projectName = "PS5" 
                                    name = "Peter Pan"
                                    image = "https://cdn.vox-cdn.com/thumbor/K-yujrt8GZ6ZtW6KrV2Pv6PphgI=/0x0:1024x683/1200x1200/filters:focal(512x342:513x343)/cdn.vox-cdn.com/uploads/chorus_asset/file/22017052/ps5_all_digital.jpg"
                                    location = "Brighton"
                                    price = "1000"
                                />
                                <DashBoardProject 
                                    projectName = "Tesla Model S" 
                                    name = "Peter Pan"
                                    image = "https://tesla-cdn.thron.com/delivery/public/image/tesla/9a12eef6-98a9-40b1-aa76-ac11feec18c4/bvlatuR/std/1640x922/compare-ms-lr"
                                    location = "Brighton"
                                    price = "10000"
                                />
                                <DashBoardProject 
                                    projectName = "Private Jet" 
                                    name = "Peter Pan"
                                    image = "http://cdn.cnn.com/cnnnext/dam/assets/191107124437-01-aman-private-jet-photos.jpg"
                                    location = "Brighton"
                                    price = "200000"
                                />
                                <DashBoardProject 
                                    projectName = "Vaccum Cleaner" 
                                    name = "Peter Pan"
                                    image = "https://s1.kaercher-media.com/products/14285090/main/1/d0.jpg"
                                    location = "Brighton"
                                    price = "2000"
                                />
                                 */}
                            </Row>
                        </Container>
                    </Col>
                    <Col sm = {4}>
                        <Row>
                            <h2>Personal Information</h2>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="full_name" placeholder="The real name"  disabled={disable} />
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" disabled={disable} />
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="phone_number" placeholder="+44 ........"  disabled={disable} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="phone_number" placeholder="UserName"  disabled={disable} />
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"  disabled={disable} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="warning" type="submit" onClick={() => setDisable(true)}>
                                    Save Changes
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <h2>Your Holding</h2>
                </Row>
                <Row>
                <DashBoardProject projectName={"Double bed"} image={"data:image/jpeg;base64,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"} target={"400"} id={"32108"}/>
                </Row>
            </Container>
        </>
    )
}

export default DashboardBody;