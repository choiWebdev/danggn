import { BrowserRouter, Link } from "react-router-dom";
import googlePlayImg from './../img/icon_gooleplay.svg';
import appStoreImg from './../img/icon_appstore.svg';
import mainSayHiImg from './../img/main_sayHi.png';
import mainSectionImg01 from './../img/main_section01.png';
import mainSectionImg02 from './../img/main_section02.png';
import mainSectionImg03 from './../img/main_section03.png';
import mainSectionImg04 from './../img/main_section04.png';
import './MainPage.css';

export default function MainPage() {
  return (
    <main>
      <section className="main_section main_section_download">
        <div className="inner">
          <div className="txt_box">
            <h2 className="big_title">당신 근처의 <br />지역 생활 커뮤니티</h2>
            <p className="section_txt">동네라서 가능한 모든 것<br />당근에서 가까운 이웃과 함께해요.</p>
            <div className="btn_wrap">
              <BrowserRouter>
                <Link className="btn_style_carrot btn_download" to="">
                  <img src={googlePlayImg} alt="구글 플레이에서 다운로드" />
                  Google Play
                </Link>
                <Link className="btn_style_carrot btn_download" to="">
                  <img src={appStoreImg} alt="앱 스토어에서 다운로드" />
                  App Store
                </Link>
              </BrowserRouter>
            </div>
          </div>
          <div className="img_box">
            <img src={mainSayHiImg} alt="당근" />
          </div>
        </div>
      </section>
      <section className="main_section main_section_left main_section01">
        <div className="inner">
          <div className="txt_box">
            <p className="small_title">중고거래</p>
            <h2 className="big_title">믿을만한<br />이웃 중고거래</h2>
            <p className="section_txt">동네 주민들과 가깝고 따뜻한 거래를 <br />지금 경험해보세요</p>
            <div className="btn_wrap">
              <BrowserRouter>
                <Link className="btn_style_graybox" to="">인기매물 보기</Link>
                <Link className="btn_style_graybox" to="">믿을 수 있는 중고거래</Link>
              </BrowserRouter>
            </div>
          </div>
          <div className="img_box">
            <img src={mainSectionImg01} alt="" />
          </div>
        </div>
      </section>
      <section className="main_section main_section_right main_section02">
        <div className="inner">
          <div className="txt_box">
            <p className="small_title">동네생활</p>
            <h2 className="big_title">이웃만 아는<br/>동네 정보와 이야기</h2>
            <p className="section_txt">우리 동네의 다양한 정보와 이야기를<br/>공감과 댓글로 나누어요.</p>
            <ul className="icon_list">
              <li>
                <div className="icon icon_club"></div>
                <p className="icon_tit">동네모임</p>
                <p className="icon_txt">근처 이웃들과 동네 이야기를 해보세요.</p>
              </li>
              <li>
                <div className="icon icon_question"></div>
                <p className="icon_tit">동네질문</p>
                <p className="icon_txt">궁금한 게 있을 땐 이웃에 물어보세요.</p>
              </li>
              <li>
                <div className="icon icon_lost"></div>
                <p className="icon_tit">동네분실센터</p>
                <p className="icon_txt">무언가를 잃어버렸다면 글을 올려보세요.</p>
              </li>
            </ul>
          </div>
          <div className="img_box">
            <img src={mainSectionImg02} alt="" />
          </div>
        </div>
      </section>
      <section className="main_section main_section_left main_section03">
        <div className="inner">
          <div className="txt_box">
            <p className="small_title">알바</p>
            <h2 className="big_title">걸어서 10분!<br/>동네 알바 구하기</h2>
            <p className="section_txt">당근하듯 쉽고, 편하게<br/> 당근 알바로 동네 알바를 구할 수 있어요.</p>
            <div className="btn_wrap">
              <BrowserRouter>
                <Link className="btn_style_graybox" to="">내근처 알바 보기</Link>
              </BrowserRouter>
            </div>
          </div>
          <div className="img_box">
            <img src={mainSectionImg03} alt="" />
          </div>
        </div>
      </section>
      <section className="main_section main_section_right main_section04">
        <div className="inner">
          <div className="txt_box">
            <p className="small_title">동네업체</p>
            <h2 className="big_title">내 근처에서 찾는<br/>동네업체</h2>
            <p className="section_txt">이웃들의 추천 후기를 확인하고<br/>동네 곳곳의 업체들을 찾을 수 있어요.</p>
            <div className="btn_wrap">
              <BrowserRouter>
                <Link className="btn_style_graybox" to="">당근 동네업체 보기</Link>
              </BrowserRouter>
            </div>
          </div>
          <div className="img_box">
            <img src={mainSectionImg04} alt="" />
          </div>
        </div>
      </section>
    </main>
  ); 
};
