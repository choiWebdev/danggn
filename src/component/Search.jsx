import './Search.css';
import mobileSearchIcon from './../img/icon_search.svg';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Search() {
  return (
    <div className="search_wrap">
      <span className="mb_search_open">
        <img src={mobileSearchIcon} alt="검색창 열기" />
      </span>
      <input className="ipt_search" type="search" placeholder="물품이나 동네를 검색해보세요" name="hd_search" />
      <BrowserRouter>
        <Link className="btn_chating btn_style_box" target="_blank">채팅하기</Link>
      </BrowserRouter>
    </div>
  )
};
