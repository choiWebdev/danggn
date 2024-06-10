import { Link } from 'react-router-dom';
import googlePlayImg from './../img/icon_gooleplay_black.svg';
import appStoreImg from './../img/icon_appstore_black.svg';
import selectLanguageIcon from './../img/icon_language.svg';
import languageDropdownIcon from './../img/icon_dropdown.svg';
import './Footer.css';

// 언어 선택 메뉴 상태 초기화
let isLanguageDrop = false;

// 언어 선택 메뉴 열기
const languageDrop = () => {
  const langList = document.getElementById('language_list');
  isLanguageDrop = !isLanguageDrop;
  langList.style.display = isLanguageDrop ? 'block' : 'none';
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="ft_top">
          <nav className="ft_submenu">
              <ul>
                <li>
                  <Link to="">중고거래</Link>
                  <Link to="">동네업체</Link>
                  <Link to="">당근알바</Link>
                  <Link to="">부동산</Link>
                  <Link to="">중고차 직거래</Link>
                </li>
                <li>
                  <Link to="">당근비즈니스</Link>
                  <Link to="">채팅하기</Link>
                </li>
                <li>
                  <Link to="">자주 묻는 질문</Link>
                  <Link to="">회사 소개</Link>
                  <Link to="">인재 채용</Link>
                </li>
              </ul>
          </nav>
          <div className="ft_download">
            <p className="ft_tit">당근 앱 다운로드</p>
            <div className="btn_wrap">
                <Link className="btn_style_graybox btn_download" to="">
                  <img src={googlePlayImg} alt="구글 플레이에서 다운로드" />
                  Google Play
                </Link>
                <Link className="btn_style_graybox btn_download" to="">
                  <img src={appStoreImg} alt="앱 스토어에서 다운로드" />
                  App Store
                </Link>
            </div>
          </div>
        </div>
        <div className="ft_bot">
          <div className="ft_info_wrap">
            <p className="ft_info"><strong>대표</strong> 김용현, 황도연 | <strong>사업자번호</strong> 375-87-00088</p>
            <p className="ft_info"><strong>직업정보제공사업 신고번호</strong> J1200020200016</p>
            <p className="ft_info"><strong>통신판매업 신고번호</strong> 2016-서울서초-0051</p>
            <address className="ft_info"><strong>주소</strong> 서울특별시 구로구 디지털로 300, 10층 (당근서비스)</address>
            <address className="ft_info"><strong>전화</strong> 1544-9796 | <strong>고객문의</strong> cs@daangnservice.com</address>
          </div>
          <nav className="ft_nav">
              <Link to="">제휴 문의</Link>
              <Link to="">광고 문의</Link>
              <Link to="">PR 문의</Link>
              <Link to="">IR 문의</Link>
          </nav>
          <nav className="ft_nav">
              <Link to="">이용약관</Link>
              <Link to="">개인정보처리방침</Link>
              <Link to="">위치기반서비스 이용약관</Link>
              <Link to="">이용자보호 비전과 계획</Link>
              <Link to="">청소년보호정책</Link>
          </nav>
          <div className="ft_sns">
              <Link className="sns_icon sns_facebook" to="">페이스북</Link>
              <Link className="sns_icon sns_instagram" to="">인스타그램</Link>
              <Link className="sns_icon sns_youtube" to="">유튜브</Link>
              <Link className="sns_icon sns_blog" to="">네이버 블로그</Link>
            <div className="select_language" onClick={languageDrop} >
              <img src={selectLanguageIcon} alt="언어" />
              <span>한국</span>
              <img src={languageDropdownIcon} alt="선택" />
              <ul id="language_list">
                <li>한국</li>
                <li>영국</li>
                <li>캐나다</li>
                <li>미국</li>
                <li>일본</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
