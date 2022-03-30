import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './AppHeader/AppHeader';
import AppContent from './AppContent/AppContent';
import AppFooter from './AppFooter/AppFooter';

function App() {
    return (
        <>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </>
    );
}

export default App;
