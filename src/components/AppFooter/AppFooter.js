import { Navbar, Container } from 'react-bootstrap';

function AppFooter() {
    return (
        //#region
        // TODO: Стили хардкодом, переделать на Bootstrap
        //     <footer style={{ position: 'absolute', bottom: 0 }} >
        //         <div>
        //             <span>dedmagic, 2022</span>
        //         </div>
        //     </footer>
        //#endregion
        // <Navbar sticky='bottom'>
        <Navbar fixed='bottom' bg='secondary' variant='dark'>
            {/* <Container> */}
            <Navbar.Brand className='ms-4'>dedmagic, 2022</Navbar.Brand>
            {/* </Container> */}
        </Navbar>
    );
}

export default AppFooter;
