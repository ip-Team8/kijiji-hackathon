
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SavedSellers from './pages/SavedSellers/SavedSellers';
import AdExample from './pages/AdExample/AdExample';
import SingleSeller from './components/SingleSeller/SingleSeller';
import Notifications from './pages/Notifications/Notifications';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path ='/' element={<AdExample />} />
      <Route path='/seller-profile' element={<SingleSeller />}/>
      <Route path='/saved-sellers' element={<SavedSellers />}/>
      {/* <Route path='/suggested-sellers' element={<SuggestedSellers/>}/> */}
      <Route path='/notifications' element={<Notifications />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
