import { Col, Row, Container } from 'react-bootstrap';

import MainMenu from './MainMenu';
import AppContent from './AppContent';

function MainArea() {
    return (
        // <Container fluid className='h-100'>
        // <Container fluid className='m-auto'>
        <Container fluid style={{ margin: 'auto' }}>
            <Row>
                <Col sm={1} className='w-auto'>
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
