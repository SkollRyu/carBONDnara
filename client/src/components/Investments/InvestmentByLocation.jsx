import {Card,CardGroup, Container,Row,Col,Button} from 'react-bootstrap';
import Investment from '../Investment/Investment';
import useFetch from "../../useFetch";
import { useState } from 'react';
function conditional(res){
        if(res){
                return(res.map(Bond=>(
                <Investment Bond={Bond} />)     
            ))  
        }
}

function InvestmentByLocation(){
    const { data: res, error, isPending } = useFetch('http://localhost:4000/bonds/');
    const [Fake,setFake] = useState([
        {id:"32001",userid:"00001", projectName:"Oven" ,name:"Peter Pan",image:"https://uk.bertazzoni.com/media/immagini/13061_z_F6011PRO-TX.jpg",location:"Brighton",postcode:"",target:"10000",current:"500",solutions:["Trade in with my old equipment","Use my equipment for 20 mins twice per week"]}
    ])
    return(
        
        <Container className="py-4">
            <Row className="text-center"><h1>Looking for Community support project?</h1></Row>
            <Row><h2>Near by investment project </h2></Row>
            <Row xs={1} md={3} className="g-4">
                {conditional(res)}
                {/* 
                <Investment 
                    id= "32001"
                    projectName = "Oven" 
                    name = "Peter Pan"
                    image = "https://uk.bertazzoni.com/media/immagini/13061_z_F6011PRO-TX.jpg"
                    location = "Brighton"
                    price = "1000"
                    />
                <Investment 
                    id= "32102"
                    projectName = "Television" 
                    name = "Peter Pan"
                    image = "https://www.collinsdictionary.com/images/full/television_160593200.jpg"
                    location = "Brighton"
                    price = "2000"
                />
                <Investment
                    id= "52102"
                    projectName = "PS5" 
                    name = "Peter Pan"
                    image = "https://cdn.hughes.co.uk/live/media/image/14/49/c4/hoo-h3w49te.jpg"
                    location = "Brighton"
                    price = "3000"
                />
                <Investment 
                    id= "13142"
                    projectName = "PS5" 
                    name = "Peter Pan"
                    image = "https://cdn.hughes.co.uk/live/media/image/14/49/c4/hoo-h3w49te.jpg"
                    location = "Brighton"
                    price = "1000"
                />
                <Investment 
                    id= "93162"
                    projectName = "Tesla Model S" 
                    name = "Peter Pan"
                    image = "https://tesla-cdn.thron.com/delivery/public/image/tesla/9a12eef6-98a9-40b1-aa76-ac11feec18c4/bvlatuR/std/1640x922/compare-ms-lr"
                    location = "Brighton"
                    price = "10000"
                />
                <Investment 
                    id= "53122"
                    projectName = "Private Jet" 
                    name = "Peter Pan"
                    image = "http://cdn.cnn.com/cnnnext/dam/assets/191107124437-01-aman-private-jet-photos.jpg"
                    location = "Brighton"
                    price = "200000"
                />
                <Investment 
                    id= "73152"
                    projectName = "Vaccum Cleaner" 
                    name = "Peter Pan"
                    image = "https://s1.kaercher-media.com/products/14285090/main/1/d0.jpg"
                    location = "Brighton"
                    price = "2000"
                />
                
                <Investment />
                <Investment />
                */}
            </Row>
        </Container>
    )
}
export default InvestmentByLocation;