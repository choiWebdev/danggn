import './App.css';
import Header from './component/Header';
import MainPage from './component/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents_wrap">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
