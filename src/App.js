import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import MainPage from './component/MainPage';
import Fleamarket from './component/Fleamarket';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="contents_wrap">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fleamarket" element={<Fleamarket />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
