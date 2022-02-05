const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <footer className="Footer">
        <div className="Footer__left">
          <div>
            안전구매(에스크로) 서비스 가맹정 | 이용약관 | 개인정보처리방침
          </div>
          <div>
            상호: (주)어썸인 | 대표: 서선화 | 개인정보관리책임자: 성선화 |
            전화:01095243477 | 이메일:albga@naver.com
          </div>
          <div>
            주소: 서울특별시 서초구 강남대로51길 10, 비1층 106-2
            18호(서초동,강남효성해링턴타워) | 사업자등록번호: 585-87-01608|
          </div>
          <div>
            통신판매: 제2020-서울서초-20953호 | 호스팅제공자: (주)식스샵
          </div>
        </div>
        <div>
          <img
            style={{ marginBottom: "10px" }}
            src={process.env.PUBLIC_URL + `assets/imgs/72-28.png`}
          />
        </div>
      </footer>
    </>
  );
};
export default Footer;
