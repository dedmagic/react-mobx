import { Col, Row, Container } from 'react-bootstrap';

import MainMenu from '../MainMenu/MainMenu';
import AppContent from '../AppContent/AppContent';

function MainArea() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}>
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
