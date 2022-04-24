import { Nav,NavDropdown,Navbar,Container} from 'react-bootstrap';

function TopBar (){
    return (
        <Navbar bg="light" variant="light">
            <Container>
             
                    <Navbar.Brand href="/">BONDS</Navbar.Brand>
                    <Nav className="justify-content-end ">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Dashboard">Dash Board</Nav.Link>
                    </Nav>
            
            </Container>
        </Navbar>
    )
}

export default TopBar;