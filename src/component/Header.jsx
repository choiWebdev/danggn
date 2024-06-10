import { Link } from 'react-router-dom';
import Search from './Search';
import HeaderLogoImage from './../img/logo.svg';
import './Header.css';

export default function Header(){
  return (
    <header id="header">
      <div className="inner1200">
        <h1 id="logo">
          <Link to="/">
            <img src={HeaderLogoImage} alt="당근" />
          </Link>
        </h1>
        <nav id="gnb">
          <Link to="/fleamarket" replace>중고거래</Link>
          <Link to="">동네업체</Link>
          <Link to="">알바</Link>
          <Link to="">부동산</Link>
          <Link to="">중고차 직거래</Link>
        </nav>
        <Search />
      </div>
    </header>
  )
}