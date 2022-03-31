import { Navbar, Container } from 'react-bootstrap';

function AppFooter() {
    return (
        <Navbar fixed='bottom' bg='secondary' variant='dark'>
            <Container fluid>
                <Navbar.Brand>dedmagic, 2022</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default AppFooter;
