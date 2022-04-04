import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './AppHeader/AppHeader';
import MainArea from './MainArea/MainArea';
import AppFooter from './AppFooter/AppFooter';

function App() {
    return (
        <>
            <AppHeader />
            <MainArea />
            <AppFooter />
        </>
    );
}

export default App;
