import './Footer.css'
import { Link } from 'react-router-dom'
import Icon1 from '../../images/snsicon-01.png'
import Icon2 from '../../images/snsicon-02.png'
import Icon3 from '../../images/snsicon-03.png'


function Footer() {
    return (
        <div className="footer">
            
            <div className="line"></div>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="title1">whathapened</div>
                    <div><Link to="/">[공지] 개인 정보 처리 방침 변경 사전 안내</Link></div>
                    <div><Link to="/">[공지] 29CM 강남 스토어 영업 종료</Link></div>
                    <div><Link to="/">[공지] 개인 정보 처리 방침 변경 사전 안내</Link></div>
                    <div><Link to="/">[공지] iOS 10 이하 버전 지원 중단 안내</Link></div>
                    <div><Link to="/">[공지] 개인 정보 처리 방침 변경 사전 안내</Link></div>
                </div>
                <div className="footer-content-link">
                    <div className="footer-content-link-column">
                        <div className="title1">about us</div>
                        <div><Link to="/">회사 소개</Link></div>
                        <div><Link to="/">인재 채용</Link></div>
                        <div><Link to="/">상시 할인 혜택</Link></div>
                    </div>
                    <div className="footer-content-link-column">
                        <div className="title1">my order</div>
                        <div><Link to="/">내 주문</Link></div>
                        <div><Link to="/">주문 배송</Link></div>
                        <div><Link to="/">취소 / 교환 / 반품 내역</Link></div>
                        <div><Link to="/">상품 리뷰 내역</Link></div>
                        <div><Link to="/">증빙 서류 발급</Link></div>
                    </div>
                    <div className="footer-content-link-column">
                        <div className="title1">my account</div>
                        <div><Link to="/">회원 정보 수정</Link></div>
                        <div><Link to="/">회원 등급</Link></div>
                        <div><Link to="/">마일리지 현황</Link></div>
                        <div><Link to="/">쿠폰</Link></div>
                    </div>
                    <div className="footer-content-link-column">
                        <div className="title1">help</div>
                        <div><Link to="/">1 : 1 상담 내역</Link></div>
                        <div><Link to="/">상품 Q & A 내역</Link></div>
                        <div><Link to="/">공지 사항</Link></div>
                        <div><Link to="/">자주하는 질문</Link></div>
                        <div><Link to="/">고객의 소리</Link></div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer-copyright">
                <div className="copyright">
                    <div><Link to="/">[© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</Link></div>
                    <div><Link to="/">서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</Link></div>
                </div>
                <div className="footer-icon">
                    <Link className="Icon"><img src={Icon1} alt="snsIcon"></img></Link>
                    <Link className="Icon"><img src={Icon2} alt="snsIcon"></img></Link>
                    <Link className="Icon"><img src={Icon3} alt="snsIcon"></img></Link>
           
                </div>
            </div>
        </div>
    )
}

export default Footer;