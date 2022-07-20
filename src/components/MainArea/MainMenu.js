import { Nav, Row } from 'react-bootstrap';

function MainMenu() {
    return (
        // <div className='h-100 d-inline-block main-menu-container'>
        // <div className='h-100 main-menu-container'>
        <div className='h-auto main-menu-container'>
            {/* <div className='h-100'> */}
            <Row className='h-90 main-menu-group'>
                <Nav className='flex-column'>
                    <Nav.Link>Поручения</Nav.Link>
                    <Nav.Link>Сотрудники</Nav.Link>
                    <Nav.Link>Должности</Nav.Link>
                    {/* TODO: можно ли hr заменить на компонент из react-bootstrap? */}
                    <hr />
                    <Nav.Link>Аналитика</Nav.Link>
                </Nav>
            </Row>
            <Row className='main-menu-group'>
                <Nav className='flex-column'>
                    {/* TODO: можно ли hr заменить на компонент из react-bootstrap? */}
                    <hr />
                    <Nav.Link>Настройки</Nav.Link>
                    <Nav.Link>Помощь</Nav.Link>
                </Nav>
            </Row>
        </div>
    );
}

export default MainMenu;
