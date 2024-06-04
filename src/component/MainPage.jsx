import { BrowserRouter, Link } from "react-router-dom";
import googlePlayImg from './../img/icon_gooleplay.svg';
import appStoreImg from './../img/icon_appstore.svg';
import './MainPage.css';

export default function MainPage() {
  return (
    <main>
      <section className="main_section main_section_download">
        <div className="inner">
          <h2 className="big_title">당신 근처의 <br />지역 생활 커뮤니티</h2>
          <p className="section_txt">동네라서 가능한 모든 것<br />당근에서 가까운 이웃과 함께해요.</p>
          <div className="btn_wrap">
            <BrowserRouter className="">
              <Link className="btn_style_carrot btn_download" to="">
                <img src={googlePlayImg} alt="구글 플레이" />
                Google Play
              </Link>
              <Link className="btn_style_carrot btn_download" to="">
                <img src={appStoreImg} alt="앱 스토어" />
                App Store
              </Link>
            </BrowserRouter>
          </div>
        </div>
      </section>
    </main>
  ); 
};
