import { Nav, Row } from 'react-bootstrap';

function MainMenu() {
    return (
        <>
            <Row className='h-90'>
                <Nav className='flex-column'>
                    <Nav.Link>Поручения</Nav.Link>
                    <Nav.Link>Сотрудники</Nav.Link>
                    <Nav.Link>Должности</Nav.Link>
                    <Nav.Link>Аналитика</Nav.Link>
                </Nav>
            </Row>
            <Row>
                <Nav className='flex-column'>
                    <Nav.Link>Настройки</Nav.Link>
                    <Nav.Link>Помощь</Nav.Link>
                </Nav>
            </Row>
        </>
    );
}

export default MainMenu;
