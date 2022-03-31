import { Navbar, Container } from "react-bootstrap";

import HeaderBrand from './HeaderBrand';
import MainToolbar from './MainToolbar';

function AppHeader() {
    return (
        <Navbar bg='primary' variant='dark' expand='xxl' >
            <Container fluid>
                <HeaderBrand />
                <MainToolbar />
            </Container>
        </Navbar>
    );
}

export default AppHeader;
