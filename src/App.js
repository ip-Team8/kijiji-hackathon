
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SavedSearches from './pages/SavedSearches/SavedSearches';
import SuggestedSellers from './pages/SuggestedSellers/SuggestedSellers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path='/' element={<SavedSearches />}/>
      <Route path='/suggested-sellers' element={<SuggestedSellers/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
