import { BrowserRouter, Link } from 'react-router-dom';
import Search from './Search';
import HeaderLogoImage from './../img/logo.svg';
import './Header.css';

export default function Header(){
  return (
    <header id="header">
      <div className="inner1200">
        <h1 id="logo">
          <BrowserRouter>
            <Link to="/">
              <img src={HeaderLogoImage} alt="당근" />
            </Link>
          </BrowserRouter>
        </h1>
        <nav id="gnb">
          <BrowserRouter>
            <Link to="" element="">중고거래</Link>
            <Link to="" element="">동네업체</Link>
            <Link to="" element="">알바</Link>
            <Link to="" element="">부동산</Link>
            <Link to="" element="">중고차 직거래</Link>
          </BrowserRouter>
        </nav>
        <Search />
      </div>
    </header>
  )
}