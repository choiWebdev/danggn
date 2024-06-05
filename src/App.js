import './App.css';
import Header from './component/Header';
import MainPage from './component/MainPage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents_wrap">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
