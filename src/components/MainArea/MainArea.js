import { Col, Row, Container } from 'react-bootstrap';

import MainMenu from './MainMenu';
import AppContent from './AppContent';

function MainArea() {
    return (
        <Container fluid className='h-100'>
            <Row>
                <Col sm={1}>
                    <MainMenu />
                </Col>
                <Col>
                    <AppContent />
                </Col>
            </Row>
        </Container>
    );
}

export default MainArea;
