
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Header />



    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
